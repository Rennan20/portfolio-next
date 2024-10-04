type SkillType = {
  id: number;
  src: string;
  alt: string;
  proficiency: string;
  directionLeft?: boolean;
};

export const skills: SkillType[] = [
  {
    id: 1,
    src: "/vs-code.png",
    alt: "VSCode",
    proficiency: "80%",
    directionLeft: true,
  },
  {
    id: 2,
    src: "/html.png",
    alt: "HTML5",
    proficiency: "80%",
    directionLeft: false,
  },
  {
    id: 3,
    src: "/css-logo.ico.png",
    alt: "CSS3",
    proficiency: "80%",
    directionLeft: false,
  },
  {
    id: 4,
    src: "/javascirpt-logo.png",
    alt: "JavaScript",
    proficiency: "80%",
    directionLeft: false,
  },
  {
    id: 5,
    src: "/reactjs-logo.png",
    alt: "ReactJs",
    proficiency: "70%",
    directionLeft: false,
  },
  {
    id: 6,
    src: "/git-logo.png",
    alt: "Git",
    proficiency: "80%",
    directionLeft: false,
  },
  {
    id: 7,
    src: "/typescript-logo.png",
    alt: "TypeScript",
    proficiency: "80%",
    directionLeft: false,
  },
  {
    id: 8,
    src: "/nextjs-logo.png",
    alt: "Next",
    proficiency: "60%",
    directionLeft: true,
  },
  {
    id: 9,
    src: "/tailwind.png",
    alt: "TailwindCSS",
    proficiency: "80%",
    directionLeft: true,
  },
  {
    id: 10,
    src: "/database-logo.png",
    alt: "Database",
    proficiency: "50%",
    directionLeft: true,
  },
  {
    id: 11,
    src: "/firebase.png",
    alt: "Firebase",
    proficiency: "50%",
    directionLeft: true,
  },
  {
    id: 12,
    src: "/sanity.png",
    alt: "Sanity",
    proficiency: "50%",
    directionLeft: true,
  },
  {
    id: 13,
    src: "/metamask.png",
    alt: "MetaMask",
    proficiency: "50%",
    directionLeft: true,
  },
  {
    id: 14,
    src: "/nodejs-logo.png",
    alt: "NodeJs",
    proficiency: "50%",
    directionLeft: true,
  },
];
