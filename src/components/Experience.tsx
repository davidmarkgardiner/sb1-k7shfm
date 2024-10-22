import React from 'react';
import { Link } from 'react-router-dom';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const sectionBg = isDarkMode ? 'bg-gray-800' : 'bg-white shadow';

  const TechLabel = ({ tech }: { tech: string }) => (
    <Link to={`/skillset#${tech}`} className={`inline-block px-2 py-1 rounded-full text-sm mr-2 mb-2 ${isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}>
      {tech}
    </Link>
  );

  const JobExperience = ({ 
    title, 
    company, 
    period, 
    description, 
    achievements, 
    technicalFocus 
  }: { 
    title: string;
    company: string;
    period: string;
    description: string;
    achievements?: string[];
    technicalFocus: Record<string, string[]>;
  }) => (
    <div className={`${sectionBg} p-6 rounded-lg mb-6`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-2"><strong>{company}</strong> | {period}</p>
      <p className="mb-4">{description}</p>
      
      {achievements && (
        <>
          <h3 className="text-xl font-semibold mb-2">Key Achievements:</h3>
          <ul className="list-disc pl-5 mb-4">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className="text-xl font-semibold mb-2">Technical Focus:</h3>
      {Object.entries(technicalFocus).map(([category, techs]) => (
        <div key={category} className="mb-2">
          <strong>{category}:</strong>{' '}
          {techs.map((tech, index) => (
            <TechLabel key={index} tech={tech} />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className={`container mx-auto px-4 py-8 ${textColor}`}>
      <h1 className="text-3xl font-bold mb-6">Professional Experience</h1>

      <JobExperience
        title="Senior DevSecOps Engineer"
        company="Investment Bank"
        period="April 2022 - Present"
        description="Lead Azure Kubernetes Service (AKS) engineer focusing on enterprise-scale cloud infrastructure and security implementations."
        achievements={[
          "Spearheaded collaboration between production teams and Microsoft to ensure successful feature delivery",
          "Implemented comprehensive security measures using PodSecurityAdmission and Azure Policy",
          "Established robust observability frameworks using industry-standard tools"
        ]}
        technicalFocus={{
          "Infrastructure Management": ["azure-devops", "gitlab", "gitops", "flux", "terraform"],
          "Container Orchestration": ["kubernetes", "aks", "aci"],
          "Monitoring & Observability": ["prometheus", "grafana", "azure-monitor"],
          "Networking": ["cni", "cilium", "guardicore"],
          "Development": ["golang", "python", "bash", "powershell", "yaml"]
        }}
      />

      <JobExperience
        title="Senior DevOps Engineer"
        company="Department for Business, Energy & Industrial Strategy (BEIS)"
        period="January 2021 - March 2022"
        description="Led DevOps initiatives focusing on cloud infrastructure and containerization strategies."
        technicalFocus={{
          "Infrastructure": ["azure-devops", "kubernetes", "containers"],
          "Configuration": ["terraform", "arm-templates"],
          "Monitoring": ["sumologic", "logit", "prometheus", "grafana", "alertmanager"],
          "Development": ["python", "golang", "bash", "powershell"]
        }}
      />

      <JobExperience
        title="Senior DevOps Engineer"
        company="NatWest"
        period="January 2020 - August 2020"
        description="Specialized in Kubernetes-as-a-Service implementations across multiple cloud platforms."
        technicalFocus={{
          "Platforms": ["aws", "azure", "vmware"],
          "CI/CD": ["jenkins", "concourse"],
          "Monitoring": ["splunk", "appdynamics", "prometheus", "grafana"],
          "Infrastructure": ["kubernetes", "containers", "nginx"]
        }}
      />

      <JobExperience
        title="Senior DevOps Engineer"
        company="JP Morgan"
        period="June 2017 - November 2019"
        description="Focused on large-scale Kubernetes deployments and cloud infrastructure management."
        technicalFocus={{
          "Cloud Platforms": ["aws", "azure", "pivotal"],
          "Infrastructure": ["kubernetes", "containers"],
          "Configuration": ["ansible", "kubernetes-manifests"],
          "Development": ["bash", "json", "yaml"]
        }}
      />

      <div className={`${sectionBg} p-6 rounded-lg mb-6`}>
        <h2 className="text-2xl font-bold mb-4">Previous Experience</h2>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Senior DevOps Engineer</h3>
          <p><strong>Tesco Bank</strong> | February 2016 - March 2017</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Senior DevOps Engineer</h3>
          <p><strong>Redeem Group</strong> | 2015 - 2016</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;