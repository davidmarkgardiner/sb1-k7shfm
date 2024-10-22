import React from 'react';

interface SkillsetProps {
  isDarkMode: boolean;
}

const Skillset: React.FC<SkillsetProps> = ({ isDarkMode }) => {
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const sectionBg = isDarkMode ? 'bg-gray-800' : 'bg-white shadow';

  const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
    <div className={`${sectionBg} p-6 rounded-lg mb-6`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-blue-100 text-blue-800'}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`container mx-auto px-4 py-8 ${textColor}`}>
      <h1 className="text-3xl font-bold mb-6">Core Technical Competencies</h1>

      <SkillCategory
        title="Cloud & Infrastructure"
        skills={['kubernetes', 'azure', 'aws', 'containers', 'microservices']}
      />

      <SkillCategory
        title="DevOps & Automation"
        skills={['azure-devops', 'gitlab', 'terraform', 'arm-templates', 'gitops', 'azure-service-operator', 'golang', 'python', 'bash', 'powershell', 'yaml']}
      />

      <SkillCategory
        title="Monitoring & Security"
        skills={['prometheus', 'grafana', 'azure-monitor', 'admission-controllers', 'gatekeeper', 'kyverno', 'azure-policy', 'cni', 'cilium', 'guardicore']}
      />

      <SkillCategory
        title="Development"
        skills={['golang', 'python', 'gitops', 'argocd', 'fluxcd']}
      />
    </div>
  );
};

export default Skillset;