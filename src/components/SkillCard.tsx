import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  size: 'sm' | 'md' | 'lg';
  index: number;
  isDarkMode: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, size, index, isDarkMode }) => {
  const getTechInfo = (name: string): { logo: string; url: string } => {
    const techInfo: Record<string, { logo: string; url: string }> = {
      'ArgoCD': {
        logo: 'https://argo-cd.readthedocs.io/en/stable/assets/logo.png',
        url: 'https://argo-cd.readthedocs.io/'
      },
      'Authentik': {
        logo: 'https://goauthentik.io/img/icon_top_brand.svg',
        url: 'https://goauthentik.io/'
      },
      'Authelia': {
        logo: 'https://www.authelia.com/images/branding/logo.png',
        url: 'https://www.authelia.com/'
      },
      'Cert Manager': {
        logo: 'https://cert-manager.io/images/cert-manager-logo-icon.svg',
        url: 'https://cert-manager.io/'
      },
      'External DNS': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>`)}`,
        url: 'https://github.com/kubernetes-sigs/external-dns'
      },
      'Longhorn': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4 9.5l7 3.5v7L4 16.5V9.5zm9 0v7l7-3.5V9.5l-7 3.5z"/></svg>`)}`,
        url: 'https://longhorn.io/'
      },
      'Azure Storage': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://azure.microsoft.com/products/container-storage'
      },
      'External Secrets': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.4 9.36-7 10.6-3.6-1.24-7-5.77-7-10.6V6.3l7-3.12zm-1 4.32v2h2v-2h-2zm0 4v6h2v-6h-2z"/></svg>`)}`,
        url: 'https://external-secrets.io/'
      },
      'Vault': {
        logo: 'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg',
        url: 'https://developer.hashicorp.com/vault'
      },
      'Traefik': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5zm-1 5v5h2v-5h-2zm0 6v2h2v-2h-2z"/></svg>`)}`,
        url: 'https://traefik.io/traefik/'
      },
      'Uptime Robot': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3.707-11.707L11 13l-2.707-2.707-1.414 1.414L11 15.828l6.121-6.121-1.414-1.414z"/></svg>`)}`,
        url: 'https://uptimerobot.com/'
      },
      'Kubernetes': {
        logo: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg',
        url: 'https://kubernetes.io/'
      },
      'Azure': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://azure.microsoft.com/'
      },
      'AWS': {
        logo: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png',
        url: 'https://aws.amazon.com/'
      },
      'Docker': {
        logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
        url: 'https://www.docker.com/'
      },
      'GitLab': {
        logo: 'https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg',
        url: 'https://gitlab.com/'
      },
      'Terraform': {
        logo: 'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg',
        url: 'https://www.terraform.io/'
      },
      'Go': {
        logo: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
        url: 'https://go.dev/'
      },
      'Python': {
        logo: 'https://www.python.org/static/community_logos/python-logo-generic.svg',
        url: 'https://www.python.org/'
      },
      'Prometheus': {
        logo: 'https://raw.githubusercontent.com/prometheus/prometheus/main/documentation/images/prometheus-logo.svg',
        url: 'https://prometheus.io/'
      },
      'Grafana': {
        logo: 'https://raw.githubusercontent.com/grafana/grafana/main/public/img/grafana_icon.svg',
        url: 'https://grafana.com/'
      },
      'Cilium': {
        logo: 'https://cdn.jsdelivr.net/gh/cilium/cilium@master/Documentation/images/logo-solo.svg',
        url: 'https://cilium.io/'
      },
      'Jenkins': {
        logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg',
        url: 'https://www.jenkins.io/'
      },
      'Azure DevOps': {
        logo: 'https://cdn.vsassets.io/content/icons/favicon.ico',
        url: 'https://azure.microsoft.com/products/devops'
      },
      'Splunk': {
        logo: 'https://www.splunk.com/content/dam/splunk2/images/Planet-Splunk.svg',
        url: 'https://www.splunk.com/'
      },
      'Nginx': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>NGINX</title><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z"/></svg>`)}`,
        url: 'https://www.nginx.com/'
      },
      'Istio': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Istio</title><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z"/></svg>`)}`,
        url: 'https://istio.io/'
      },
      'VMware': {
        logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vmware.svg',
        url: 'https://www.vmware.com/'
      },
      'Flux': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flux</title><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M11.402 23.747c.154.075.306.154.454.238.181.038.37.004.525-.097l.386-.251c-1.242-.831-2.622-1.251-3.998-1.602l2.633 1.712Zm-7.495-5.783a8.088 8.088 0 0 1-.222-.236.696.696 0 0 0 .112 1.075l2.304 1.498c1.019.422 2.085.686 3.134.944 1.636.403 3.2.79 4.554 1.728l.697-.453c-1.541-1.158-3.327-1.602-5.065-2.03-2.039-.503-3.965-.977-5.514-2.526Zm1.414-1.322-.665.432c.023.024.044.049.068.073 1.702 1.702 3.825 2.225 5.877 2.731 1.778.438 3.469.856 4.9 1.982l.682-.444c-1.612-1.357-3.532-1.834-5.395-2.293-2.019-.497-3.926-.969-5.467-2.481Zm7.502 2.084c1.596.412 3.096.904 4.367 2.036l.67-.436c-1.484-1.396-3.266-1.953-5.037-2.403v.803Zm.698-2.337a64.695 64.695 0 0 1-.698-.174v.802l.512.127c2.039.503 3.965.978 5.514 2.526l.007.009.663-.431c-.041-.042-.079-.086-.121-.128-1.702-1.701-3.824-2.225-5.877-2.731Zm-.698-1.928v.816c.624.19 1.255.347 1.879.501 2.039.502 3.965.977 5.513 2.526.077.077.153.157.226.239a.704.704 0 0 0-.238-.911l-3.064-1.992c-.744-.245-1.502-.433-2.251-.618a31.436 31.436 0 0 1-2.065-.561Zm-1.646 3.049c-1.526-.4-2.96-.888-4.185-1.955l-.674.439c1.439 1.326 3.151 1.88 4.859 2.319v-.803Zm0-1.772a8.543 8.543 0 0 1-2.492-1.283l-.686.446c.975.804 2.061 1.293 3.178 1.655v-.818Zm0-1.946a7.59 7.59 0 0 1-.776-.453l-.701.456c.462.337.957.627 1.477.865v-.868Zm3.533.269-1.887-1.226v.581c.614.257 1.244.473 1.887.645Zm5.493-8.863L12.381.112a.705.705 0 0 0-.762 0L3.797 5.198a.698.698 0 0 0 0 1.171l7.38 4.797V7.678a.414.414 0 0 0-.412-.412h-.543a.413.413 0 0 1-.356-.617l1.777-3.079a.412.412 0 0 1 .714 0l1.777 3.079a.413.413 0 0 1-.356.617h-.543a.414.414 0 0 0-.412.412v3.488l7.38-4.797a.7.7 0 0 0 0-1.171Z"/></svg>`)}`,
        url: 'https://fluxcd.io/'
      },
      'Azure Container Apps': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://azure.microsoft.com/products/container-apps'
      },
      'Azure Container Instances': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://azure.microsoft.com/products/container-instances'
      },
      'GitOps': {
        logo: `data:image/svg+xml,${encodeURIComponent(`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitpod</title><path fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" d="M14.033 1.195a2.387 2.387 0 0 1-.87 3.235l-6.98 4.04a.602.602 0 0 0-.3.522v6.342a.6.6 0 0 0 .3.521l5.524 3.199a.585.585 0 0 0 .586 0l5.527-3.199a.603.603 0 0 0 .299-.52V11.39l-4.969 2.838a2.326 2.326 0 0 1-3.19-.9 2.388 2.388 0 0 1 .89-3.23l7.108-4.062C20.123 4.8 22.8 6.384 22.8 8.901v6.914a4.524 4.524 0 0 1-2.245 3.919l-6.345 3.672a4.407 4.407 0 0 1-4.422 0l-6.344-3.672A4.524 4.524 0 0 1 1.2 15.816V8.51a4.524 4.524 0 0 1 2.245-3.918l7.393-4.28a2.326 2.326 0 0 1 3.195.883z"/></svg>`)}`,
        url: 'https://www.gitops.tech/'
      },
      'ARM Templates': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://learn.microsoft.com/azure/azure-resource-manager/templates/'
      },
      'Bicep': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://learn.microsoft.com/azure/azure-resource-manager/bicep/'
      },
      'PowerShell': {
        logo: 'https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/ps_black_128.svg',
        url: 'https://learn.microsoft.com/powershell/'
      },
      'Concourse': {
        logo: 'https://concourse-ci.org/images/logo-white.svg',
        url: 'https://concourse-ci.org/'
      },
      'Azure Monitor': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://azure.microsoft.com/products/monitor'
      },
      'AppDynamics': {
        logo: 'https://www.appdynamics.com/c/r/appdynamics/images/logo.svg',
        url: 'https://www.appdynamics.com/'
      },
      'Container Insights': {
        logo: 'https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png',
        url: 'https://learn.microsoft.com/azure/azure-monitor/containers/container-insights-overview'
      },
      'Alertmanager': {
        logo: 'https://raw.githubusercontent.com/prometheus/prometheus/main/documentation/images/prometheus-logo.svg',
        url: 'https://prometheus.io/docs/alerting/latest/alertmanager/'
      }
    };
    
    return techInfo[name] || {
      logo: `data:image/svg+xml,${encodeURIComponent(
        `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="${isDarkMode ? '#374151' : '#f3f4f6'}"/>
          <text x="50" y="50" font-family="Arial" font-size="40" fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" 
            text-anchor="middle" dominant-baseline="middle">${name.charAt(0)}</text>
        </svg>`
      )}`,
      url: '#'
    };
  };

  const techInfo = getTechInfo(name);

  return (
    <motion.a
      href={techInfo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center p-2 rounded-lg ${
        isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
      } transition-all duration-300 ease-in-out no-underline`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        delay: index * 0.05,
        duration: 0.3
      }}
    >
      <motion.div
        className={`relative ${
          size === 'lg' ? 'w-12 h-12' :
          size === 'md' ? 'w-10 h-10' :
          'w-8 h-8'
        }`}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: index * 0.1,
        }}
      >
        <img
          src={techInfo.logo}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(
              `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="${isDarkMode ? '#374151' : '#f3f4f6'}"/>
                <text x="50" y="50" font-family="Arial" font-size="40" fill="${isDarkMode ? '#fbbf24' : '#2563eb'}" 
                  text-anchor="middle" dominant-baseline="middle">${name.charAt(0)}</text>
              </svg>`
            )}`;
          }}
        />
      </motion.div>
      <p className={`mt-2 text-center text-xs font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        {name}
      </p>
    </motion.a>
  );
};

export default SkillCard;