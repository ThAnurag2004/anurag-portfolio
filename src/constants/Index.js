import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.webp'
import project3 from '../assets/projects/project-3.webp'
import project4 from '../assets/projects/project-4.webp'
import project5 from '../assets/projects/project-5.png'
import project6 from '../assets/projects/project-6.png'
import sql from '../assets/certification/sql-certificate.jpg'
import React from '../assets/certification/react-certificate.jpg'
import git from '../assets/certification/git-certificate.jpg'
import figma from '../assets/certification/figma-certificate.jpg'
import cyber from '../assets/certification/cyber-certificate.jpg'

export const HERO_CONTENT = `I'm a final-year B.Tech CSE student and currently a Web Development Intern at IBM. I specialize in React.js, SQL, C++, and frontend design, with a strong focus on problem-solving. Passionate about creating impactful user experiences and always eager to learn and grow with innovative teams.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of hands-on experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to projects.`;


export const PROJECTS = [
  {
    title: "Food Delivery Platform",
    link: "https://food-delivery-website-nilq1p8us-thanurag2004s-projects.vercel.app/",
    image: project1,
    description:
      "A complete react js based frontend project, fully responsive Mobile first design",
    technologies: ["React","Redux ToolKit"],
  },
  {
    title: "Portfolio Website",
    link: "https://anurag-portfolio-five.vercel.app/",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "FramerMotion", "React", "TailwindCSS"],
  },
  {
    title: "Weather App",
    link: "https://weatherapp-mauve-six.vercel.app/",
    image: project3,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Tailwind CSS", "React", "OpenWeather"],
  },
  {
    title: "Todo App ",
    link: "https://todo-list-git-main-thanurag2004s-projects.vercel.app/",
    image: project5,
    description:
      "A Todo App With local Storage",
    technologies: ["HTML","CSS", "JavaScript" ],
  },
  {
    title: "Typing Guru",
    link: "https://typing-guru-delta.vercel.app/",
    image: project6,
    description:
      "A Typing Test platform to test your typing speed",
    technologies: ["HTML","CSS","JavaScript"],
  },
];


export const certificate = [
  {
    title:"React JS Crash Course",
    link:"https://www.udemy.com/certificate/UC-9e1cc5d7-2cf0-4fa1-9417-5249cd38db8a/",
    image: React,
    description:"Completed a React.js Crash Course focused on modern frontend development.Gained hands-on experience with mobile-first design and Tailwind CSS.Learned state management using Redux Toolkit for scalable applications.Implemented dynamic routing with React Router in single-page apps.",
    skills: ["React JS", "Redux ToolKit"],
  },
  {
    title:"Introduction to CyberSecutrity",
    link:"https://www.credly.com/badges/e7862de1-daa1-41bf-83ce-5224521fbe69",
    image: cyber,
    description:"Certified in Introduction to Cyber Security – learned network vulnerabilities, cybersecurity basics, network security, and online cyber awareness.",
    skills: ["Cyber Security", "Cyber Best Practices"],
  },
  {
    title:"SQL (Basics)",
    link:"https://www.hackerrank.com/certificates/33839b9207b3",
    image: sql,
    description:"Completed SQL Basics certification – learned fundamental SQL commands like SELECT, INSERT, UPDATE, DELETE, and filtering data.",
    skills: ["SQL","MySql"],
  },
  {
    title:"UI/UX Design",
    link:"https://www.udemy.com/certificate/UC-e7e9146e-b20b-455d-ac2a-87bbdfb93847/",
    image: figma,
    description:"Completed UI/UX Design course using Figma – learned wireframing, prototyping, and creating user-friendly interface designs.",
    skills: ["UI","Figma","UX"],
  },
]

export const CONTACT = {
  address: "House No.- 461, Block-23 TrilokPuri, Delhi-110091, India",
  phoneNo: "+91 8882352533",
  email: "anuragsingh04204@gmail.com",
};
