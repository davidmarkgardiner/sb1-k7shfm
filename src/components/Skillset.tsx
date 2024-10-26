import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';

interface SkillsetProps {
  isDarkMode: boolean;
}

const Skillset: React.FC<SkillsetProps> = ({ isDarkMode }) => {
  const skills = {
    'Cloud & Infrastructure': [
      { name: 'Kubernetes', size: 'lg' as const },
      { name: 'Azure', size: 'lg' as const },
      { name: 'AWS', size: 'md' as const },
      { name: 'Docker', size: 'md' as const },
      { name: 'Azure Container Apps', size: 'sm' as const },
      { name: 'Azure Container Instances', size: 'sm' as const },
      { name: 'VMware', size: 'sm' as const },
      { name: 'Nginx', size: 'sm' as const },
      { name: 'Istio', size: 'sm' as const }
    ],
    'DevOps Tools': [
      { name: 'GitLab', size: 'md' as const },
      { name: 'Terraform', size: 'lg' as const },
      { name: 'Azure DevOps', size: 'lg' as const },
      { name: 'GitOps', size: 'md' as const },
      { name: 'Flux', size: 'md' as const },
      { name: 'ArgoCD', size: 'lg' as const },
      { name: 'Azure Service Operator', size: 'md' as const },
      { name: 'ARM Templates', size: 'sm' as const },
      { name: 'Bicep', size: 'sm' as const },
      { name: 'PowerShell', size: 'sm' as const },
      { name: 'Concourse', size: 'sm' as const },
      { name: 'Jenkins', size: 'sm' as const },
      { name: 'Go', size: 'sm' as const },
      { name: 'Python', size: 'sm' as const }
    ],
    'Monitoring & Security': [
      { name: 'Prometheus', size: 'lg' as const },
      { name: 'Grafana', size: 'lg' as const },
      { name: 'Azure Monitor', size: 'md' as const },
      { name: 'Container Insights', size: 'sm' as const },
      { name: 'Alertmanager', size: 'sm' as const },
      { name: 'Cilium', size: 'sm' as const },
      { name: 'Authentik', size: 'md' as const },
      { name: 'Authelia', size: 'md' as const },
      { name: 'Cert Manager', size: 'md' as const },
      { name: 'External DNS', size: 'md' as const },
      { name: 'Longhorn', size: 'md' as const },
      { name: 'Azure Storage', size: 'md' as const },
      { name: 'External Secrets', size: 'md' as const },
      { name: 'Vault', size: 'lg' as const },
      { name: 'Traefik', size: 'md' as const },
      { name: 'Uptime Robot', size: 'sm' as const }
    ],
    'AI & Machine Learning': [
      { name: 'GitHub Copilot', size: 'lg' as const },
      { name: 'Claude', size: 'lg' as const },
      { name: 'Gemini', size: 'lg' as const },
      { name: 'ChatGPT', size: 'lg' as const }
    ]
  };

  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Core Technical Competencies
      </motion.h1>

      {Object.entries(skills).map(([category, skillList], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <SkillCategory
            title={category}
            skills={skillList}
            isDarkMode={isDarkMode}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Skillset;