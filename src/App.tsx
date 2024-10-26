import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Skillset from './components/Skillset';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
              <Sidebar isDarkMode={isDarkMode} />
              <MainContent isDarkMode={isDarkMode} />
            </div>
          } />
          <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
          <Route path="/experience" element={<Experience isDarkMode={isDarkMode} />} />
          <Route path="/skillset" element={<Skillset isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;