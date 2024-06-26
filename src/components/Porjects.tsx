import React from "react";
import {
  GPT4SaaS,
  Sumz,
  Portfolio,
  toDoList,
  Tenzies,
} from "../assets/projects/index";

interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href, label }) => (
  <div className="overflow-hidden cursor-pointer">
    <a href={href} aria-label={label}>
      <button className="py-2 px-6 bg-[#560ea2] rounded text-[#fff] text-sm font-normal border border-transparent transition-all hover:border-black hover:bg-transparent hover:text-[#000]">
        {label}
      </button>
    </a>
  </div>
);

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  websiteLink: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  techStack,
  githubLink,
  websiteLink,
  imageUrl,
}) => (
  <div className="p-3 lg:p-5 bg-[#EDF6FD] text-[#000] rounded-lg flex flex-col justify-start items-center gap-2.5 lg:gap-5">
    <a href={websiteLink}>
      <img
        src={imageUrl}
        alt={name}
        className="rounded mb-3 object-fit w-full h-full"
      />
    </a>
    <div className="w-11/12">
      <h2 className="text-xl md:text-2xl font-bold font-alegreya">{name}</h2>
      <p className="font-normal text-sm sm:text-base">{description}</p>
      <div className="mt-4">
        {/* <p>Tech Stack:</p> */}
        <ul className="list-none flex gap-2 flex-wrap text-sm font-normal">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex gap-10">
      <Button href={githubLink} label="GitHub" />
      <Button href={websiteLink} label="Website" />
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Sumz",
      description:
        "Sumz cuts through lengthy articles, providing concise summaries with the click of a button. Save summaries for future reference and translate them into multiple languages. Developed to streamline reading, Sumz enhances productivity and saves time. During development, I strengthened my skills in state management and Redux store setup.",
      techStack: [
        "JavaScript",
        "React",
        "Redux Toolkit",
        "Rapid API",
        "TailWind CSS",
      ],
      githubLink: "https://github.com/Ahmad-Maartmesrini/ai_summraizer",
      websiteLink: "https://ai-summraizer.vercel.app",
      imageUrl: Sumz,
    },
    {
      name: "Portfolio",
      description:
        "Step into Mohamad's Portfolio: A Gallery of Masterpieces. Crafted with precision and sophistication, showcasing high-end designs. Its modern, sleek design effortlessly converts visitors into clients, offering an immersive experience. Leveraging the latest UI library, every element highlights Mohamad's creativity, while embracing innovative design trends to engage users at every turn.",
      techStack: ["TypeScript", "React", "Aceternity UI", "TailWind CSS"],
      githubLink: "https://github.com/Ahmad-Maartmesrini/Mohamad-Shahbandar",
      websiteLink: "https://mohamadshahbandar.vercel.app",
      imageUrl: Portfolio,
    },
    {
      name: "Tenzies",
      description:
        "Tenzies is a fast-paced dice game perfect for quick rounds, blending chance with strategic decisions. Through development, mastery of props and state management in React was achieved, ensuring seamless data flow and dynamic UI updates.",
      techStack: ["JavaScript", "React", "TailWind CSS"],
      githubLink: "https://github.com/Ahmad-Maartmesrini/Tenzies",
      websiteLink: "https://tenzies-sage-eta.vercel.app",
      imageUrl: Tenzies,
    },
    {
      name: "GPT4SaaS",
      description:
        "The primary goal of this project was to transform modern UI/UX designs into functional websites, regardless of complexity. Although it's currently an early request landing page for an AI Startup, the project underscores a dedication to mastering frontend development, with a particular focus on pure CSS3. It delivers a sleek and functional interface for users to submit their requests.",
      techStack: ["JavaScript", "React", "CSS3"],
      githubLink: "https://github.com/Ahmad-Maartmesrini/GPT4-SAAS",
      websiteLink: "https://gpt4saas.vercel.app",
      imageUrl: GPT4SaaS,
    },
    {
      name: "Web to-do list",
      description:
        "Boost your productivity with this user-friendly, open-source to-do list application.  It prioritizes simplicity with a clean design to streamline your task management.  Interactive sounds provide rewarding feedback, keeping you engaged as you check off tasks.  Convenient local storage ensures your to-do list is always accessible.",
      techStack: ["TypeScript", "React", "TailWind CSS"],
      githubLink: "https://github.com/Ahmad-Maartmesrini/Todo-List",
      websiteLink: "https://web-to-do-list-omega.vercel.app",
      imageUrl: toDoList,
    },
  ];

  const year = () => new Date().getFullYear();

  return (
    <>
      <div
        id="projects"
        className="padding-section pb-0 min-h-screen flex flex-col justify-center items-center"
      >
        <div className="max-w-[1200px]">
          <div className="pb-10">
            <h1 className="font-alegreya font-bold text-3xl sm:text-5xl md:text-8xl text-center text-[#7e14d6]">
              Projects
            </h1>
            <p className="text-sm md:text-base xl:text-lg mt-6 text-center lg:mx-16">
              I'm working remotely at a B2B company that deals with
              international clients. Within my team, I focus on developing
              sophisticated front-end interfaces to ensure optimal user
              experiences. Currently, we're using Svelte to build a national
              e-commerce platform.
            </p>
          </div>
          <p className="text-center text-sm my-2">
            Here are some projects I built while learning.
          </p>
          <div className="flex flex-col justify-center items-center gap-6 lg:gap-10 font-bold">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
      <small className="flex justify-center text-[8px] lg:text-xs mb-4 font-normal">
        &#9400; {year()} AHMAD MAARTMESRINI • All RIGHT RESERVED
      </small>
    </>
  );
};

export default Projects;
