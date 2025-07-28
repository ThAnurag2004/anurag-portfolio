import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.webp'
import project3 from '../assets/projects/project-3.webp'
import project4 from '../assets/projects/project-4.webp'
import project5 from '../assets/projects/project-5.png'
import project6 from '../assets/projects/project-6.png'

export const HERO_CONTENT = `I'm a final-year B.Tech CSE student and currently a Web Development Intern at IBM. I specialize in React.js, SQL, C++, and frontend design, with a strong focus on problem-solving. Passionate about creating impactful user experiences and always eager to learn and grow with innovative teams.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of hands-on experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to projects.`;


export const PROJECTS = [
  {
    title: "Food Delivery Platform",
    link: "https://food-delivery-website-nilq1p8us-thanurag2004s-projects.vercel.app/",
    image: project1,
    description:
      "A complete react js based frontend project, fully responsive Mobile first design",
    technologies: ["React","Redux ToolKit","React Icons","Tailwind CSS"],
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
    title: "KaamKhoj Job Portal",
    link: "",
    image: project4,
    description:
      "A Job searching and job posting platform with role based login for admin and user",
    technologies: ["Tailwind CSS", "React", "Shadcn Ui","Clerk Js", "Supabase"],
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

export const CONTACT = {
  address: "House No.- 461, Block-23 TrilokPuri, Delhi-110091, India",
  phoneNo: "+91 8882352533",
  email: "anuragsingh04204@gmail.com",
};
