export const bio = [
  "Hello, I'm <strong>Deepak</strong>!",
  `Senior Security Engineer with over <strong>13 years</strong> of experience in designing, 
  building, and securing scalable SaaS platforms, incorporating 
  <strong>Trust by Design</strong> 
  principles and a <strong>Shift Left Security</strong> mindset throughout the SSDLC. 
  Proficient in leading the development and delivery of cloud-native 
  applications with control plane and data plane architectures across 
  <strong>AWS, Azure and GCP</strong>. My expertise as an Offensive Security Pentester 
  and Developer, complemented by hands-on experience in startups and 
  large corporations puts me in a unique position to assess org’s 
  security posture, identify vulnerabilities early and implement 
  proactive strategies. Adept at threat modeling, aligning with compliance 
  frameworks, and driving 
  secure-by-default solutions to establish and maintain trust across stakeholders`,
  `Beyond coding, I enjoy traveling through the serene 
    <strong>Himalayan mountains</strong> and experimenting with new 
    recipes in the <strong>kitchen</strong>`,
];

export const skills = [
  "Golang, Python, Web Penetration Testing, Offensive Security, BurpSuite",
  "GCP, AWS, Azure, Kubernetes",
  "OWASP Threat Dragon, checkov, semgrep, gitleaks",
  "Kali Linux - nmap amass metasploit SQLMap",  
];

export const experience = [
  {
    title: "sekurity.ai, Remote",
    duration: "June 2024 - Present​",
    subtitle: "Founding Engineer",
    details: [
      "Designing a AI Pentesting SaaS platform powered by OpenAI \
        to discover, catalogue and continuously monitor a company’s\
        digital assets - domains, certificates, any public information,\
         infra (on prem and cloud) for security vulnerabilities"],
    tags: ["Golang", "OpenAI", "RAG",
      "Threat Modeling", "Red Teaming", "STRIDE",  
      "SOC 2", "AI pipelines",  
    ],
    icon: "truck ",
  },
  {
    title: "Striim.com, Palo Alto",
    duration: "Dec 2015 - Mar 2024​",
    subtitle: "Senior Software Engineer",
    details: ["Designed and secured the SaaS control and data plane"],
    tags: ["Golang", 
      "Threat Modeling", "Red Teaming", "STRIDE",  
      "SOC 2", "AI pipelines",  
    ],
    icon: "truck ",
  },
  {
    title: "Apptio, Seattle",
    duration: "April 2013 - December 2015",
    subtitle: "Software Development Engineer 2",
    details: [
      `De-architected the monolith into separate modules - libraries and microservices`,
      `Designed the Content Management Service to version data and 
        content enabling users to rollback any activity`,
      `Designed RESTful AuthN and AuthZ Service with integrations 
        to OpenLDAP and Safenet KMS integration for storing sensitive customer data`,
      `Designed the monitoring & logging service using open source Codahale metrics lib`,
    ],
    tags: [
      "Python", 
      "Java", 
      "Logstash", 
      "Graylog", 
      "Graphite", 
      "Codahale metrics", 
      "EhCache",
      "etc.",
    ],
    icon: "heartbeat",
  },
  {
    title: "Amazon, Seattle",
    duration: "October 2012 - April 2013",
    subtitle: "Software Development Engineer",
    details: [
      `Designed the HATS service to track how much Amazon internal 
      services cost each other from service logs.`,
      `Implemented Hive queries for distributed copying and processing of logs 
      from S3 to an EMR cluster`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "Citrix R&D, Bengaluru",
    duration: "June 2011 - OCT 2012",
    subtitle: "Software Development Engineer",
    details: [
      `Implemented Auto-Scaling & LBaaS in Apache CloudStack with NetScaler`, 
      `Openstack Nova Iptables drivers to enable Security Groups 
        and Provider Firewall for Xen Cloud Platform `,
    ],
    tags: ["Python", "Django", "Scripting", "Java", "Netscaler"],
    icon: "group",
  },
];


export const openSourcePRs = [
    {
        name: "OpenStack PRs - Nova, Neutron, DevStack, Keystone",
        url:  "https://review.opendev.org/q/deepakgarg.iitg%2540gmail.com",
    },
    {
        name: "Apache CloudStack",
        url: "https://reviews.apache.org/users/deepak/",
    },
    {
        name: "XenaPI Provider Firewall Blueprint",
        url: "https://blueprints.launchpad.net/nova/+spec/xenapi-provider-firewall",
    },
    {
        name: "Apache CloudStack Autoscaling Blueprint",
        url: "https://cwiki.apache.org/confluence/display/CLOUDSTACK/Autoscaling",
    },
    {
        name: "Go-IPFS",
        url: "https://github.com/ipfs/go-ipfs-cmds/pulls?q=is%3Apr+author%3Agargdeepak+is%3Aclosed",
    },
    {
        name: "IPFS Cluster",
        url: "https://github.com/ipfs-cluster/ipfs-cluster/pulls?q=is%3Apr+author%3Agargdeepak+is%3Aclosed"
    },
];


export const trekking = [
  '<strong>Kheerganga Trek</strong>, Himachal Pradesh (9,711 feet)',
  '<strong>Triund Trek</strong>, Himachal Pradesh (9,350 feet)',
];

export const education = [
  {
    title: "B.Tech. in Electronics & Communication Engineering",
    duration: "2007 - 2011",
    subtitle: "Indian Institute of Technology Guwahati",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  //   {
  //     label: "Resources",
  //     data: [
  //       {
  //         text: "Enable Dark/Light Mode",
  //         func: "enableDarkMode()",
  //       },
  //       {
  //         text: "Print this page",
  //         func: "window.print()",
  //       },
  //     ],
  //   },
  {
    label: "Links",
    data: [
      //   {
      //     text: "Linkedin",
      //     link: "https://www.linkedin.com/in/vinaysomawat/",
      //   },
      //   {
      //     text: "Twitter",
      //     link: "https://twitter.com/thesigmakid",
      //   },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by Deepak"],
  },
];
