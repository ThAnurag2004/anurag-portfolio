import project1 from "../assets/projects/project-1.webp";
import project3 from "../assets/projects/project-3.webp";
import project2 from "../assets/projects/project-2.webp";
import project4 from "../assets/projects/project-4.webp"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, GSAP and FramerMotion, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of hands-on experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to projects.`;


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "#",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
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
];

export const CONTACT = {
  address: "House No.- 461, Block-23 TrilokPuri, Delhi-110091, India",
  phoneNo: "+91 8882352533",
  email: "anuragsingh04204@gmail.com",
};
