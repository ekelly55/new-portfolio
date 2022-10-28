import {DiDjango} from 'react-icons/di';

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

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageSize: 375,
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const projects = [

    {
      name: "Ghost Assistant",
      live: "https://ekelly55.github.io/Project-1-Ghost-Assistant/",
      git: "https://github.com/ekelly55/Project-1-Ghost-Assistant",
      image: "https://i.imgur.com/3EPeFVl.png",
      tech: ["HTML5", "CSS Grid", "CSS Flexbox", "Javascript", "GitHub Pages"],
      description: "Tamagotchi-style Halloween-themed in-browser game deployed on Github Pages."
    },
    {
      name: "Noob Insider",
      live: "https://obscure-fortress-74365.herokuapp.com/games",
      git: "https://github.com/tjphillips08/Video-game-news",
      image: "https://i.imgur.com/ZF7zE0l.png",
      tech: ["HTML5", "CSS Grid", "CSS Flexbox", "Javascript", "Node.js", "Express.js", "MongoDB","Heroku"],
      description: "Full-stack MEN application rendering a fully-functional video game news site with user interactivity. Deployed on Heroku."
    },
    {
      name: "AnimeDB",
      live: "https://anime-db.netlify.app/",
      git: "https://github.com/saybeeali/animedb-front-end",
      image: "https://i.imgur.com/E7DOkrU.png",
      tech: ["HTML5", "Bootstrap", "Javascript", "React", "Node.js", "Express.js", "MongoDB","Heroku", "Netlify"],
      description: "Full-stack MERN application for users to find information on top anime drawn from an external API. Deployed on Netlify."
    },
    {
      name: "DadHub",
      live: "https://dadhub.herokuapp.com/",
      git: "https://github.com/ekelly55/DadHub",
      image: "https://i.imgur.com/mpkZ74g.png",
      tech: ["HTML5", "Bootstrap", "Python", "Django", "PostgreSQL", "Heroku"],
      description: "Full-stack fully-responsive Django/PostgreSQL social media app for dads to interact and connect based on common interests and location. Deployed on Heroku."
    },
  ];
  
  
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  faHardSkills: [
    { image: "fa-github"},
    { image: "fa-html5"},
    { image: "fa-css3"},
    { image: "fa-react"},
    { image: "fa-python"},
    { image: "fa-node"},
    { image: "fa-bootstrap"},
    { image: "fa-square-js"},
  ],
  diHardSkills: [
    { image: "DiDjango"},
    { image: "DiMongodb"}
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  email: "eamonn.michael.kelly@gmail.com",
  message:
    "I'm happy to connect with potential employers, clients or fellow devs. Say hi!",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, projects, skills, getInTouch, experiences };
