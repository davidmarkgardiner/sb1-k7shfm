import React from 'react';
import { Mail, Download, Linkedin, Github, Twitter } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode }) => {
  return (
    <div className="w-full md:w-1/3 mb-8 md:mb-0">
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white shadow'} p-6 rounded-lg`}>
        <img
          src="/david-gardiner.jpg"
          alt="David Gardiner"
          className="w-full h-64 object-cover rounded-lg mb-4"
          onError={(e) => {
            console.error("Error loading image:", e);
            e.currentTarget.src = 'https://via.placeholder.com/300x300?text=David+Gardiner';
          }}
        />
        <h1 className="text-2xl font-bold mb-2">David Gardiner</h1>
        <h2 className="text-xl mb-2">Lead DevSecOps Engineer & Cloud Architect</h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Edinburgh, UK</p>
        <div className="flex flex-col space-y-3">
          <a
            href="mailto:davidmarkgardiner@gmail.com"
            className={`flex items-center justify-center px-4 py-2 rounded ${
              isDarkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-blue-600 text-white hover:bg-blue-500'
            }`}
          >
            <Mail className="mr-2" size={18} />
            Contact Me
          </a>
          <button className={`flex items-center justify-center px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-blue-600 hover:bg-gray-300'}`}>
            <Download className="mr-2" size={18} />
            Download Resume
          </button>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-blue-600'}`}>
            <Linkedin size={24} />
          </a>
          <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-blue-600'}`}>
            <Github size={24} />
          </a>
          <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-blue-600'}`}>
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;