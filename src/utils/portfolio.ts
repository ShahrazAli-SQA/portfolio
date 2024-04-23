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
  twitter: 'https://twitter.com/Moizkhan465',
  github: 'https://github.com/Ashiq-Ali-sheikh',
  linkedin: 'https://www.linkedin.com/in/ashiq-ali-full-stack/',
};

export const author = {
  name: 'Ashiq Ali',
  email: 'ashiq.liaqat465@gmail.com',
};

export const seoData = {
  title: 'Ashiq Ali | Mern Stack Developer',
  description:
    'As a Mern Stack developer, I have extensive experience building modern web applications using MongoDB, Express.js, React.js, Nest js, and Node.js. I have a passion for using these technologies to create intuitive and performant user interfaces, and I am confident in my ability to deliver high-quality, scalable web applications.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Ashiq',
    'Ashiq Ali',
    'ashiq.liaqat465@gmail.com',
    'Mern Stack',
    'Portfolio',
    'Ashiq Portfolio ',
    'Mern Stack Portfolio',
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
  title: 'Ashiq Ali.',
  tagline: 'I craft visually stunning web interfaces using the MERN stack.',
  description:
    'As a Mern Stack developer, I have extensive experience building modern web applications using MongoDB, Express.js, React.js, Nest js, and Node.js. I have a passion for using these technologies to create intuitive and performant user interfaces, and I am confident in my ability to deliver high-quality, scalable web applications.',
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
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
      'NextJs',
      'ReactJs',
      'ExpressJs',
      'NodeJs',
      'TypeScript',
      'NestJs',
      'MongoDB',
      'Bootstrap',
    ],
  },
  img: '/ashiqali.jpeg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static & dynamic websites using Mern Stack',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in NestJS Framework using MongoDB',
        'Performance optimization and scalability using caching',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/

        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'nestjs', icon: 'logos:nestjs' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },

        { name: 'mongodb', icon: 'logos:mongodb' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },

        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },

        { name: 'database', icon: 'vscode-icons:file-type-sql' },
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
      company: 'Ekkel AI',
      companyUrl: 'https://ekkel.ai/',
      role: 'Mern Stack Developer',
      started: 'july 2022',
      upto: 'present',
      tasks: [
        'Developed and maintained web applications using the MERN stack.',
        'Collaborated with cross-functional teams to understand requirements and deliver features within the given timeline.',
        'RESTful APIs and implemented user authentication and authorization using JWT.',
        'Optimized web applications for performance and scalability.',
      ],
    },
    {
      company: 'Geeklone Technology',
      companyUrl: 'https://www.geeklone.com/',
      role: 'Jr.Mern Stack Developer',
      started: 'Jan 2021',
      upto: 'july 2022',
      tasks: [
        'Developed and maintained web applications using the MERN stack.',
        'Collaborated with cross-functional teams to understand requirements and deliver features within the given timeline.',
        'RESTful APIs and implemented user authentication and authorization using JWT.',
        'Optimized web applications for performance and scalability.',
      ],
    },
    {
      company: 'PenAndWeb',
      companyUrl: 'https://penandweb.business.site/',
      role: 'Frontend developer',
      started: 'Aug 2020',
      upto: 'january 2021',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
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
      name: 'Careerli',
      url: 'https://careerli.ekkel.app/',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/CAREERLI2.PNG',
      year: 2023,
      tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js', 'Stripe'],
    },
    {
      id: getId(),
      name: 'Word Rocket',
      url: 'https://staging.wordrocket.ai/',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/word-rocket.png',
      year: 2023,
      tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js', 'Stripe'],
    },
    {
      id: getId(),
      name: 'Immutable',
      url: 'https://immutabletype.ekkel.app/',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/immutable.png',
      year: 2023,
      tags: [
        'React Js',
        'Nest Js',
        'WEB3.0',
        'MongoDB',
        'Node Js',
        'BlockChain',
      ],
    },
    // {
    //   id: getId(),
    //   name: 'fylo landing page',
    //   url: 'https://fylo-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/fylo',
    //   img: 'https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png',
    //   year: 2023,
    //   tags: ['Html', 'Tailwind', 'TS'],
    // },
    {
      id: getId(),
      name: 'Vibe Music',
      url: 'https://staging.vibe-music.io/',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/vibemusic.jpeg',
      year: 2022,
      tags: [
        'React Js',
        'Nest Js',
        'WEB3.0',
        'MongoDB',
        'Node Js',
        'BlockChain',
      ],
    },
    {
      id: getId(),
      name: 'Deevy',
      url: 'https://app.deevy.app/',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/deevy.PNG',
      year: 2022,
      tags: [
        'React Js',
        'Nest Js',
        'WEB3.0',
        'MongoDB',
        'Node Js',
        'BlockChain',
      ],
    },
    {
      id: getId(),
      name: 'WritingO',
      url: 'https://app.writingo.ai/',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/writingo.PNG',
      year: 2022,
      tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js', 'Stripe'],
    },
    {
      id: getId(),
      name: 'College Assistant',
      url: 'https://collegeassistant.ai/',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/jobgeny.PNG',
      year: 2022,
      tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js'],
    },
    {
      id: getId(),
      name: 'Ratedme',
      url: 'https://admin.imratedme.com',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/ratedme.PNG',
      year: 2022,
      tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js'],
    },
    {
      id: getId(),
      name: 'Lotto Alaska',
      url: 'https://tickets2.lottoalaska.com',
      repo: 'https://github.com/Ekkel-AI-Private-Limited',
      img: '/lotto.PNG',
      year: 2022,
      tags: ['React Js', 'Nest Js', 'AI', 'MongoDB', 'Node Js'],
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
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Ashiq Ali',
  link: 'https://www.linkedin.com/in/ashiq-ali-full-stack/',
};
