import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  crudai,
  StoreFusion,
  threejs,
  medindia,
  kafka,
  yellowant,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
  {
    title: "Android App Developer",
    icon: mobile,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "YellowAnt Technologies Inc",
    icon: yellowant,
    iconBg: "#383E56",
    date: "Mar 2017 - Aug 2017",
    points: [
      "Developing and maintaining web applications using Django (python) and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Intern ",
    company_name: "MedIndia Inc.",
    icon: medindia,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Mar 2019",
    points: [
      "Developing and maintaining web applications using Python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Apache Kafka - Google Summer of Code",
    icon: kafka,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Aug 2020",
    points: [
      "Developing and maintaining server applications using golang and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, golang, Python, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "crudAI",
    icon: kafka,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Your AI buddy -> coming soon at www.crudAI.com and the Google Play Store!"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shanmukha proved me wrong.",
    name: "Victoria Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shanmukha does.",
    name: "Weston Trent",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shanmukha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lily Wink",
    designation: "CTO",
    company: "303 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "StoreFusion",
    description:
      "Web-based platform that allows users to search and access multiple stores, retailers and outlets irrepective of size. From anywhere in India with a robust path finding and route mapping algorithms",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: StoreFusion,
    source_code_link: "https://github.com/StoreFusion",
  },
  {
    name: "crudAI",
    description:
      "your friendly AI buddy helping your through organizing and compartmentalizng your thought process in order to make it easy for you to continue with your decided tasks with ease",
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "blur-text-gradient",
      },
    ],
    image: crudai,
    source_code_link: "https://crudai.com",
  },
  {
    name: "bruvai",
    description:
      "A voice and accent comprension engine for translation",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/StoreFusion",
  },
];

export { services, technologies, experiences, testimonials, projects };