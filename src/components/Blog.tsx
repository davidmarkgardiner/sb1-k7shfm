import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderKanban, Code, Shield, Server, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface BlogProps {
  isDarkMode: boolean;
}

interface BlogPost {
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  slug: string;
}

interface ModalProps {
  post: BlogPost;
  onClose: () => void;
  isDarkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({ post, onClose, isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg p-6 ${
          isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full hover:bg-opacity-10 ${
              isDarkMode ? 'hover:bg-gray-300' : 'hover:bg-gray-700'
            }`}
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-sm mb-4">{post.date}</p>
        <div className={`prose ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
) : !inline ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language="plaintext"
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
              p: ({node, ...props}) => <p className="mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
              li: ({node, ...props}) => <li className="mb-1" {...props} />,
a: ({node, href, children, ...props}) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'} underline`}
                  {...props}
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blog: React.FC<BlogProps> = ({ isDarkMode }) => {
  const [posts, setPosts] = useState<Record<string, BlogPost[]>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    { id: 'homelab', name: 'Homelab', icon: Server },
    { id: 'kubernetes', name: 'Kubernetes', icon: FolderKanban },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/assets/blog/index.json');
        const indexData = await response.json();
        
        const categorizedPosts: Record<string, BlogPost[]> = {};
        
        for (const category of categories) {
          const categoryPosts = await Promise.all(
            indexData[category.id]?.map(async (postSlug: string) => {
              const postResponse = await fetch(`/assets/blog/${category.id}/${postSlug}.md`);
              const postContent = await postResponse.text();
              
              // Basic frontmatter parsing
              const [, frontmatter, content] = postContent.split('---');
              const metadata = Object.fromEntries(
                frontmatter.trim().split('\n').map(line => {
                  const [key, ...value] = line.split(':');
                  return [key.trim(), value.join(':').trim()];
                })
              );
              
              return {
                title: metadata.title,
                date: metadata.date,
                category: category.id,
                summary: metadata.summary,
                content: content.trim(),
                slug: postSlug,
              };
            }) || []
          );
          
          categorizedPosts[category.id] = categoryPosts;
        }
        
        setPosts(categorizedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    
    fetchPosts();
  }, []);

  const allPosts = Object.values(posts).flat().sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredPosts = selectedCategory === 'all' 
    ? allPosts 
    : posts[selectedCategory] || [];

  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog & Projects
      </motion.h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <motion.button
          key="all"
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === 'all'
              ? isDarkMode
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-blue-600 text-white'
              : isDarkMode
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          All Posts
        </motion.button>

        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                selectedCategory === category.id
                  ? isDarkMode
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-blue-600 text-white'
                  : isDarkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Icon size={20} />
              {category.name}
            </motion.button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={`${post.category}-${post.slug}`}
            className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
              isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-blue-100 text-blue-800'
            }`}>
              {categories.find(c => c.id === post.category)?.name}
            </span>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-4">{post.date}</p>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {post.summary}
            </p>
            <button 
              onClick={() => setSelectedPost(post)}
              className={`inline-block ${
                isDarkMode 
                  ? 'text-yellow-400 hover:text-yellow-300' 
                  : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              Read more
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <Modal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;