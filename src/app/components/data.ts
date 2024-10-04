export type SkillType = {
  id: number;
  img: string;
  efficiency: number;
};

export const skills: SkillType[] = [
  {
    id: 1,
    img: "/react.svg",
    efficiency: 95,
  },
  {
    id: 2,
    img: "/ts.svg",
    efficiency: 90,
  },
  {
    id: 3,
    img: "/tailwind.svg",
    efficiency: 95,
  },
  {
    id: 4,
    img: "/mongodb.svg",
    efficiency: 85,
  },
  {
    id: 5,
    img: "/next.svg",
    efficiency: 88,
  },
  {
    id: 6,
    img: "/framer.svg",
    efficiency: 80,
  },

  {
    id: 7,
    img: "/js.svg",
    efficiency: 95,
  },
  {
    id: 8,
    img: "/express.svg",
    efficiency: 92,
  },
  {
    id: 9,
    img: "/html.svg",
    efficiency: 100,
  },
  {
    id: 10,
    img: "/node.svg",
    efficiency: 88,
  },
  {
    id: 11,
    img: "/css.svg",
    efficiency: 98,
  },
];

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  img: string;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "This is the best Netflix project",
    img: "/netflix.png",
  },
  {
    id: 2,
    title: "Google Clone",
    description: "This is the best Uber project",
    img: "/google.png",
  },
  {
    id: 3,
    title: "Facebook Clone",
    description: "This is the best Facebook project",
    img: "/amazon.png",
  },
];

// ... (previous SkillType and skills data)

export type ExperienceType = {
  id: number;
  title: string;
  company: string;
  companyImage: string;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  technologies: string[];
  points: string[];
};

export const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Nextflix",
    companyImage: "/netflix.png",
    dateStarted: "2023",
    dateEnded: "2024",
    isCurrentlyWorkingHere: false,
    technologies: ["/react.svg", "/ts.svg", "/tailwind.svg", "/framer.svg"],
    points: [
      "Built responsive UIs with React.js for multi-device compatibility.",
      "Worked with teams to optimize streaming performance.",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Google",
    companyImage: "/google.png",
    dateStarted: "2022",
    dateEnded: "2023",
    isCurrentlyWorkingHere: false,
    technologies: ["/react.svg", "/node.svg", "/mongodb.svg", "/express.svg"],
    points: [
      "Developed and maintained web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers.",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Watsapp",
    companyImage: "/watsapp.png",
    dateStarted: "2022",
    dateEnded: "2023",
    isCurrentlyWorkingHere: false,
    technologies: ["/express.svg", "/node.svg", "/js.svg", "/mongodb.svg"],
    points: [
      "Developed and maintained web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers.",
    ],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Instagram",
    companyImage: "/instagram.png",
    dateStarted: "2022",
    dateEnded: "2023",
    isCurrentlyWorkingHere: false,
    technologies: ["/next.svg", "/tailwind.svg", "/framer.svg", "/ts.svg"],
    points: [
      "Developed and maintained web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers.",
    ],
  },
  // Add more experiences as needed
];