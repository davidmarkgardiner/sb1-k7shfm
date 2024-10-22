import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} py-4`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className={`${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'}`}>Home</Link></li>
            <li><Link to="/experience" className={`${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'}`}>Experience</Link></li>
            <li><Link to="/skillset" className={`${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'}`}>Skillset</Link></li>
            <li><Link to="/blog" className={`${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'}`}>Blog</Link></li>
          </ul>
        </nav>
        <button onClick={toggleTheme} className={`${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-500'}`}>
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;