import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, BookOpen, Wrench, Gamepad } from 'lucide-react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isDarkMode: boolean;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-8">
      <h2 
        className={`text-2xl font-bold mb-4 flex items-center cursor-pointer ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        {title}
        <span className="ml-2">{isOpen ? '▼' : '▶'}</span>
      </h2>
      {isOpen && children}
    </section>
  );
};

interface MainContentProps {
  isDarkMode: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isDarkMode }) => {
  return (
    <div className="w-full md:w-2/3 md:pl-8">
      <Section title="About Me" icon={<User className={`mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />} isDarkMode={isDarkMode}>
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <h1 className="text-3xl font-bold mb-4">Hi, I'm David 👋</h1>
          <h2 className="text-2xl font-semibold mb-4">Lead DevSecOps Engineer & Cloud Architect</h2>
          <p className="mb-4">
            I'm a passionate Lead Engineer specializing in DevSecFinOps, where I bridge the worlds of development, security, and financial operations. With over 8 years of experience in enterprise-scale infrastructure, I've had the privilege of architecting and implementing solutions across some of the UK's leading financial institutions and government organizations.
          </p>
          <h3 className="text-xl font-semibold mb-2">What I Bring to the Table</h3>
          <h4 className="text-lg font-semibold mt-4 mb-2">Cloud & Infrastructure Expertise</h4>
          <p className="mb-2">As a certified AWS and Azure Solutions Architect, I specialize in:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Designing and implementing enterprise-scale kubernetes environments</li>
            <li>Managing multi-cloud architectures across azure and aws</li>
            <li>Building secure, scalable infrastructure using terraform, gitops, and azure-service-operator</li>
            <li>Implementing cutting-edge container orchestration with aks and cloud-native technologies</li>
          </ul>
          <h4 className="text-lg font-semibold mt-4 mb-2">Security & Compliance Focus</h4>
          <p className="mb-2">In the financial sector, I've developed robust security frameworks using:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Advanced security controls with admission-controllers, gatekeeper, and kyverno</li>
            <li>Network security solutions including cilium and guardicore</li>
            <li>Comprehensive compliance monitoring through azure-policy</li>
          </ul>
          <h4 className="text-lg font-semibold mt-4 mb-2">Automation & Observability</h4>
          <p className="mb-2">I'm passionate about creating observable, automated systems using:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Modern CI/CD practices with azure-devops and gitlab</li>
            <li>Infrastructure as Code using terraform and arm-templates</li>
            <li>Advanced monitoring solutions with prometheus, grafana, and azure-monitor</li>
            <li>Automated deployment patterns using gitops, argocd, and fluxcd</li>
          </ul>
          <h4 className="text-lg font-semibold mt-4 mb-2">Development & Architecture</h4>
          <p className="mb-2">My technical toolkit includes:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Application development in golang and python</li>
            <li>Infrastructure automation using bash, powershell, and yaml</li>
            <li>Solutions architecture focused on microservices and cloud-native patterns</li>
          </ul>
        </div>
      </Section>

      <Section title="Professional Journey" icon={<Briefcase className={`mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />} isDarkMode={isDarkMode}>
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <p className="mb-4">Currently leading Azure Kubernetes Service (AKS) initiatives at a major investment bank, I've previously contributed to digital transformation at:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Department for Business, Energy & Industrial Strategy (BEIS)</li>
            <li>NatWest</li>
            <li>JP Morgan</li>
            <li>Tesco Bank</li>
          </ul>
        </div>
      </Section>

      <Section title="Certifications & Expertise" icon={<GraduationCap className={`mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />} isDarkMode={isDarkMode}>
        <ul className="list-disc pl-5">
          <li>AWS Solutions Architect</li>
          <li>Azure Solutions Architect</li>
          <li>Microsoft Certified Solutions Expert (MCSE) in Server Infrastructure and Private Cloud</li>
          <li>Expert in Agile methodologies (SCRUM & KANBAN)</li>
        </ul>
      </Section>

      <Section title="My Approach" icon={<Wrench className={`mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />} isDarkMode={isDarkMode}>
        <p className="mb-2">I believe in:</p>
        <ul className="list-disc pl-5">
          <li>Security-first architecture</li>
          <li>Infrastructure as Code</li>
          <li>Continuous learning and improvement</li>
          <li>Collaborative problem-solving</li>
          <li>Knowledge sharing and team empowerment</li>
        </ul>
      </Section>

      <Section title="Looking Forward" icon={<Gamepad className={`mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />} isDarkMode={isDarkMode}>
        <p className="mb-2">I'm always excited to:</p>
        <ul className="list-disc pl-5">
          <li>Tackle complex infrastructure challenges</li>
          <li>Implement innovative security solutions</li>
          <li>Share knowledge and best practices</li>
          <li>Connect with fellow technology enthusiasts</li>
        </ul>
        <p className="mt-4">Let's connect and discuss how we can build secure, scalable, and efficient cloud solutions together.</p>
      </Section>
    </div>
  );
};

export default MainContent;