import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  // twitter: 'https://twitter.com/Moizkhan465',
  github: 'https://github.com/ShahrazAli-SQA',
  linkedin: 'https://www.linkedin.com/in/shahraz-ali/',
};

export const author = {
  name: 'Shahraz Ali',
  email: 'sheraz.mansha512@gmail.com',
};

export const seoData = {
  title: 'Shahraz Ali | SQA Engineer',
  description:
  `I'm a passionate and detail-oriented Software Quality Assurance (SQA) Engineer with proven experience in both manual and automation testing. I am dedicated to ensuring software products meet the highest standards of quality, functionality, and user experience.`,
  author: author.name,
  keywords: [
    'Shahraz',
    'Shahraz Ali',
    'sheraz.mansha512@gmail.com',
    'SQA Engineer',
    'Portfolio',
    'Shahraz Portfolio ',
    'SQA Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Shahraz Ali.',
  tagline: 'I ensure software excellence through rigorous testing and quality assurance.',
  description:
    "I'm a passionate and detail-oriented Software Quality Assurance (SQA) Engineer with proven experience in both manual and automation testing. I am dedicated to ensuring software products meet the highest standards of quality, functionality, and user experience.",
    specialText: 'Currently available for a job & freelance',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Jira',
      'Youtrack',
      'AzureDev Ops',
      'Cypress',
      'Webdriver.io',
      'Selenium',
      'TestRail',
      'Qase.io',
      'Postman',
      'Jmeter',
      'Jenkins',
      'CI/CD',
    ],
  },
  img: '/Shahraz.jpeg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Software Quality Assurance Engineering',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/animation2.json',
        dark: '/lotties/animation2.json',
      },
      points: [
        'Expertise in both automation and manual testing methodologies for comprehensive software validation',
        'Developing and maintaining automated test scripts using industry-standard tools such as Selenium and Cypress',
        'Conducting manual testing to identify potential issues and ensure software experiences meet quality standards',
        'Integrating automation testing into CI/CD pipelines to enhance testing efficiency and accuracy',
        'Collaborating with cross-functional teams to streamline testing processes and improve software quality assurance practices',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/

        { name: 'Jira', icon: 'logos:jira' }, // Updated icon reference assuming it's available
        { name: 'YouTrack', icon: 'logos:youtrack' }, // Using Font Awesome icon
        { name: 'Cypress', icon: 'simple-icons:cypress' }, // Using Simple Icons
        { name: 'Selenium', icon: 'logos:selenium' },
        { name: 'webdriver.io', icon: 'simple-icons:webdriverio' }, // Assuming webdriver.io has its own icon
        { name: 'trello', icon: 'logos:trello' }, // Updated icon reference assuming it's available
        { name: 'AzureDev Ops', icon: 'simple-icons:azuredevops' },
        { name: 'Appium', icon: 'logos:appium' }, // Assuming logos library has Appium icon
        { name: 'BrowserStack', icon: 'logos:browserstack' },
      ],
    },
    // {
    //   id: getId(),
    //   title: 'MERN Stack Development',
    //   lottie: {
    //     light: '/lotties/frontend.json',
    //     dark: '/lotties/frontend-dark.json',
    //   },
    //   points: [
    //     'Building full-stack web apps with MongoDB, Express, React, Node',
    //     'Creating REST APIs and integrating them with frontends',
    //     'Developing reusable React components and screens',
    //     'Optimizing apps for performance, security and scalability',
    //   ],
    //   softwareSkills: [
    //     { name: 'nestjs', icon: 'logos:nestjs'},

    //     { name: 'stripe', icon: 'simple-icons:stripe'},
    //     { name: 'openai', icon: 'simple-icons:openai'},

    //   ]
    // },
    /* {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }, */
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Amrood Labz',
      companyUrl: 'https://www.amroodlabs.com/',
      role: 'SQA Engineer',
      started: 'Dec 2023',
      upto: 'present',
      tasks: [
        'Collaborated with stakeholders to understand project requirements and functionalities.',
        'Worked with the team lead to define and document customized QA processes aligning project needs with STLC principles.',
        'Actively participated in daily standup meetings to provide updates on testing progress.',
        `Developed comprehensive test cases and scenarios covering various functionalities, user flows, and edge cases.`,
        'Created and maintained automated test scripts using industry leading tools and frameworks to improve test coverage and efficiency.',
        'Conducted manual and automated test runs according to the test plan.',
        'Analyzed test results, identified defects, and documented them clearly with reproducible steps.',
      ],
    },
    {
      company: 'Black Box Labz',
      companyUrl: 'https://blackboxlabz.com/',
      role: 'Automation Engineer',
      started: 'May 2022',
      upto: 'Nov 2023',
      tasks: [
        'Collaborate closely with the development team to understand requirements and estimate test effort.',
        'Write clear, concise, and comprehensive test plans and cases, ensuring they cover all functionalities within sprints.',
        'Develop efficient and maintainable test scripts for web applications, hybrid solutions, and mobile apps.',
        'Utilize Cypress, Webdriverio, Appium, and BrowserStack for comprehensive cross-browser and cross-platform testing.',
        'Participated in daily stand-ups to communicate testing progress and identify any blocker.',
        'Shared detailed test results reports with the team, highlighting successes and areas for improvement.',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'DMARC REPORT',
      url: 'https://dmarcreport.com/',
      img: '/dmarc.png',
      year: 2024,
      tags: "",
      // tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js', 'Stripe'],
    },
    {
      id: getId(),
      name: 'Almariding',
      url: 'https://almariding.com/',
      img: '/alma.png',
      year: 2024,
      tags: "",
      // tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js', 'Stripe'],
    },
    {
      id: getId(),
      name: 'Dao Proptech',
      url: 'https://daoproptech.com/',
      img: '/daoproptech.png',
      year: 2023,
      tags: "",
      // tags: [
      //   'React Js',
      //   'Nest Js',
      //   'WEB3.0',
      //   'MongoDB',
      //   'Node Js',
      //   'BlockChain',
      // ],
    },
    {
      id: getId(),
      name: 'MiPro',
      url: '',
      img: '/',
      year: 2023,
      tags: "",
      // tags: [
      //   'React Js',
      //   'Nest Js',
      //   'WEB3.0',
      //   'MongoDB',
      //   'Node Js',
      //   'BlockChain',
      // ],
    },
    {
      id: getId(),
      name: 'Scan123',
      url: 'https://scan123.com/',
      img: '/scan123.png',
      year: 2022,
      tags: "",
      // tags: [
      //   'React Js',
      //   'Nest Js',
      //   'WEB3.0',
      //   'MongoDB',
      //   'Node Js',
      //   'BlockChain',
      // ],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Shahraz Ali',
  link: 'https://www.linkedin.com/in/shahraz-ali/',
};
