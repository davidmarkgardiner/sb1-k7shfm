import React from 'react';

interface BlogProps {
  isDarkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ isDarkMode }) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6">
        <article className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
          <h2 className="text-2xl font-bold mb-2">Latest Trends in Container Orchestration</h2>
          <p className="text-sm mb-4">Published on May 15, 2023</p>
          <p>In this post, we explore the cutting-edge developments in container orchestration, focusing on how these trends are shaping the future of cloud-native applications...</p>
          <a href="#" className={`mt-4 inline-block ${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'}`}>Read more</a>
        </article>
        <article className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow'}`}>
          <h2 className="text-2xl font-bold mb-2">Securing Microservices in Financial Applications</h2>
          <p className="text-sm mb-4">Published on April 22, 2023</p>
          <p>Security is paramount in financial applications. This article delves into best practices for securing microservices architecture in the context of banking and financial systems...</p>
          <a href="#" className={`mt-4 inline-block ${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'}`}>Read more</a>
        </article>
      </div>
    </div>
  );
};

export default Blog;