import { SiJavascript, SiDjango, SiMongodb, SiNetlify, SiHeroku, SiPostgresql } from "react-icons/si"
import { FaGithub, FaHtml5, FaCss3, FaReact, FaPython, FaNodeJs } from "react-icons/fa"
import { BsBootstrapFill } from "react-icons/bs"

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#F76C6C, #1a1a4a",
  firstName: "Eamonn",
  middleName: "",
  lastName: "Kelly",
  message: "Software Engineer | Educator | Creative Thinker ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ekelly55",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eamonn-m-kelly/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageSize: 375,
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};


const projects = [

    {
      name: "Ghost Assistant",
      live: "https://ekelly55.github.io/Project-1-Ghost-Assistant/",
      git: "https://github.com/ekelly55/Project-1-Ghost-Assistant",
      image: "https://i.imgur.com/nlyylq8.png",
      tech: [<FaHtml5/>, <FaCss3/>, <SiJavascript/>],
      description: "Tamagotchi-style Halloween-themed in-browser game deployed on Github Pages."
    },
    {
      name: "Noob Insider",
      live: "https://obscure-fortress-74365.herokuapp.com/games",
      git: "https://github.com/tjphillips08/Video-game-news",
      image: "https://i.imgur.com/mNeOYc5.png",
      tech: [<FaHtml5/>, <FaCss3/>, <SiJavascript/>, <FaNodeJs/>, <SiMongodb/>, <SiHeroku/>],
      description: "Full-stack MEN application rendering a fully-functional video game news site. Deployed on Heroku."
    },
    {
      name: "AnimeDB",
      live: "https://anime-db.netlify.app/",
      git: "https://github.com/saybeeali/animedb-front-end",
      image: "https://i.imgur.com/kj1Vece.png",
      tech: [<FaHtml5/>, <BsBootstrapFill/>, <SiJavascript/>, <FaNodeJs/>, <SiMongodb/>, <FaReact/>],
      description: "Full-stack MERN application for users to find information on top anime drawn from an external API. Deployed on Netlify."
    },
    {
      name: "DadHub",
      live: "https://dadhub.herokuapp.com/",
      git: "https://github.com/ekelly55/DadHub",
      image: "https://i.imgur.com/ilUGmRv.png",
      tech: [<FaHtml5/>, <BsBootstrapFill/>, <FaPython/>, <SiDjango/>, <SiPostgresql/>, <SiHeroku/>],
      description: "Full-stack fully-responsive Django/PostgreSQL social media app for dads to interact and connect based on common interests and location. Deployed on Heroku."
    },
  ];
  
  
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { image: "<FaGithub/>", alt: "github"},
    { image: "<FaHtml5/>", alt: "html5"},
    { image: "<FaCss3/>", alt: "css"},
    { image: "<FaReact/>", alt: "react"},
    { image: "<FaPython/>", alt: "python"},
    { image: "<FaNodeJs/>", alt: "node.js"},
    { image: "<BsBootstrapFill/>", alt: "bootstrap"},
    { image: "<SiJavascript/>", alt: "javascript"},
    { image: "<SiDjango/>", alt: "django"},
    { image: "<SiMongodb/>", alt: "mondodb"},
    { image: "<SiHeroku/>", alt: "heroku"},
    { image: "<SiNetlify/>", alt: "netlify"}
    
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  email: "eamonn.michael.kelly@gmail.com",
  message:
    "I'm happy to connect with potential employers, clients or fellow devs. Say hi!",
};



export { navBar, mainBody, about, projects, skills, getInTouch };
