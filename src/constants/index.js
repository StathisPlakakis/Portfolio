import project1 from "../assets/project-screenshots/project-1.png";
import project2 from "../assets/project-screenshots/project-2.png";
import project3 from "../assets/project-screenshots/project-3.png";

export const HERO_CONTENT = `I transform visions into reality, weaving together front-end creativity and back-end power to craft seamless, impactful digital experiences.`;

export const ABOUT_TEXT = ['I am a dedicated full-stack developer with a strong technical foundation in technologies like React, Redux, Tailwind CSS, Node.js, Express, and MongoDB. While I take pride in my technical expertise, my true strengths lie in my ability to connect beyond code.', 'I excel at clear and effective communication, ensuring smooth collaboration with team members and stakeholders alike. What sets me apart is my business-oriented mindset—I don’t just approach products technically but strive to understand their purpose, audience, and value to help create impactful, user-centered solutions.', 'With a balance of technical proficiency and strategic thinking, I aim to build software that not only works flawlessly but also drives business success.'];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Indipendent",
    description: `Developed multiple web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: ["mongoDB", "Express.js", "React.js", "Node.js", "Javascript"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "TailwindCSS", "Redux", "shadcn/ui", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "PayPal API"],
    link: "https://github.com/StathisPlakakis/ECommerce",

  },
  {
    title: "Product Store",
    image: project2,
    description:
      "An application for demostration of CRUD (Create, Read, Update, Delete) operations on products.",
    technologies: ["React", "ChakraUI", "Zustand",, "MongoDB", "Mongoose"],
    link: "https://github.com/StathisPlakakis/Product-Store",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A simle implementation of Battleship's classic game.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/StathisPlakakis/Battleship",
  },
];

export const CONTACT = {
  address: "Athens, Greece",
  phoneNo: "+30 6955 8278 13 ",
  email: "efstathiosplakakis@gmail.com",
};


export const me = {
  name: "Stathis Plakakis",
  role: "Full Stack Developer",
  technologies: ["MongoDB", "Express", "React", "Node.js"],
  hobies: ["Tennis", "Reading", "Coding"],
  email: "efstathiosplakakis@gmail.com",
  phone: "+30 6955 8278 13",
  address: "Athens, Greece",
}