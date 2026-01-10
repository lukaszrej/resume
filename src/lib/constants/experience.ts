import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Vaillant Group",
    positions: [
      {
        title: "Frontend React.js Developer",
        year: "03.2023 - present",
        description: `
Developed a React.js loyalty app for installers from the ground up..
            `,
        skills: [
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
          "Vite",
        ],
      },
    ],
  },

  {
    company: "Education",
    positions: [
      {
        title: "CodersLab IT School",
        year: "10.2018 - 06.2019",
        description: `
- Field of study: JavaScript Developer – React.js.
            `,
        skills: ["React.js", "JavaScript (ES6+)", "UI/UX Foundation", "Github"],
      },
      {
        title: "University of Lodz",
        year: "10.2018 - 06.2019",
        description: `
- Field of study: International Relations
- Specialization: German studies
            `,
        skills: ["English", "German"],
      },
    ],
  },
];
