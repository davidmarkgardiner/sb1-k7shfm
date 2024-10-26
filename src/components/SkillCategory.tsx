import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

interface SkillCategoryProps {
  title: string;
  skills: Array<{
    name: string;
    size: 'sm' | 'md' | 'lg';
  }>;
  isDarkMode: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, isDarkMode }) => {
  const sectionBg = isDarkMode ? 'bg-gray-800' : 'bg-white shadow';

  return (
    <div className={`${sectionBg} p-4 rounded-lg mb-4`}>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            size={skill.size}
            index={index}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;