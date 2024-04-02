import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cpp,
  solidity,
  python,
  bnyMellon,
  threejs,
  musixon,
  dateify,
  github,
  linkdin,
  leetcode,
  codeforces
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "/",
    title: "DownloadCV"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Data Structure & Algorithms",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "BNY MELLON",
    icon: bnyMellon,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Worked with CCAR(Comprehensive Capital Analysis and Review) tech team which handles the company capital adequacy and risk management practices.",
      "Streamlined STOG report generation by designing and developing an automated dashboard.",
      "Increased efficiency and accuracy in STOG reporting with a custom-built automated dashboard. This innovation saves valuable time and eliminates the risk of human error.",
      "Tech-Stacks: Python,Matplotlib,Python-pptx,MySQL,Ipy-widgets.",
    ],
  },
  
];

const educations = [
  {
    institution: "Motilal Nehru National Institute Of Technology, Allahabad, India - [DEC(2020) - JUNE(2024)]",
    degree: "B.Tech in Information Technology",
    result: "[CPI- 8.42]"
  },
  {
    institution: "MB International School, Kota, India - [April(2017) - MAY(2019)]",
    degree: "Class XII- Central Board of Secondary Education(CBSE)",
    result: "[Percentage- 91.4%]"
  },
  {
    institution: " Sant Atulanand Residential Academy, Varanasi, India - [April(2015) - MAY(2017)]",
    degree: "Class X- Central Board of Secondary Education(CBSE)",
    result: "[CGPA- 9.8]"
  }
]

const projects = [
  {
    name: "MusixON",
    description:
      "MusixON is a Web-based music player application that offers Google login/signup with full authentication, a media player featuring shuffle and repeat song functionalities. Users can like songs and add them to their liked history, create playlists, and utilize a search bar to directly search for songs, singers, albums, and more.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Shazam-API",
        color: "pink-text-gradient",
      },
    ],
    image: musixon,
    source_code_link: "https://github.com/suju1811/MusixON",
  },
  {
    name: "DATEIFY",
    description:
      "DATEIFY is a Web-based dating app that provides convenient Google login/signup functionality, individuals can personalize their profiles by uploading images and specifying their preferences, allowing for a tailored matchmaking experience,its dynamic feed feature, which presents users with carefully curated suggestions based on their specified preferences.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: dateify,
    source_code_link: "https://github.com/suju1811/DATEIFY",
  },
];

const contactMedium = [
  {
    name: "github",
    icon: github,
    url: "https://github.com/suju1811"
  },
  {
    name: "linkdin",
    icon: linkdin,
    url: "https://www.linkedin.com/in/siddharth7899"
  },
  {
    name: "leetcode",
    icon: leetcode,
    url: "https://leetcode.com/_aegon"
  },
  {
    name: "codeforces",
    icon: codeforces,
    url: "https://codeforces.com/profile/Sid_7899"
  }
]

export { services, technologies, experiences, projects, educations,contactMedium };
