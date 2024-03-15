import React from "react";
import AISummarizer from "../assets/AI Summarizer-min.png";
import Portfolio from "../assets/Portfolio.png";
import Gpt4SaaS from "../assets/GPT4SaaS.png";
import toDoList from "../assets/toDoList.png";

interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href, label }) => (
  <div className="relative overflow-hidden cursor-pointer">
    <a href={href} target="_blank" aria-label={label}>
      <button className="relative z-10 py-2 px-6 bg-[#560ea2] rounded-xl text-[#fff] font-bold border border-transparent transition-colors hover:bg-transparent hover:text-[#000]">
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
  <div className="p-5 bg-[#fff] text-[#000] rounded-3xl flex flex-col justify-start items-center gap-5">
    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={name} className="rounded-xl mb-3 w-full h-full" />
    </a>
    <div className="w-5/6">
      <h2 className="text-2xl font-bold font-alegreya">{name}</h2>
      <p className="font-normal text-[14px] sm:text-[16px] md:text-[20px]">{description}</p>
      <div className="mt-4">
        <p className="">Tech Stack:</p>
        <ul className="list-none flex gap-2 flex-wrap text-[14px] font-normal">
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
        "Overwhelmed by long articles?  Sumz cuts through the clutter. This open-source web app summarizes lengthy articles and translates them into 10 languages, saving you time and offering global perspectives on your reading.",
      techStack: [
        "JavaScript",
        "React",
        "Redux Toolkit",
        "Rapid API",
        "TailWind CSS",
      ],
      githubLink: "https://github.com/Ahmad-Maartmesrini/ai_summraizer",
      websiteLink: "https://ai-summraizer.vercel.app",
      imageUrl: AISummarizer,
    },
    {
      name: "Portfolio",
      description:
        "Overwhelmed by long articles?  Sumz cuts through the clutter. This open-source web app summarizes lengthy articles and translates them into 10 languages, saving you time and offering global perspectives on your reading.",
      techStack: [
        "TypeScript",
        "React",
        "Aceternity UI",
        "TailWind CSS",
      ],
      githubLink: "https://github.com/Ahmad-Maartmesrini/Mohamad-Shahbandar",
      websiteLink: "https://mohamadshahbandar.vercel.app",
      imageUrl: Portfolio,
    },
    {
      name: "Portfolio",
      description:
        "Overwhelmed by long articles?  Sumz cuts through the clutter. This open-source web app summarizes lengthy articles and translates them into 10 languages, saving you time and offering global perspectives on your reading.",
      techStack: [
        "TypeScript",
        "React",
        "Aceternity UI",
        "TailWind CSS",
      ],
      githubLink: "https://github.com/Ahmad-Maartmesrini/GPT4-SAAS",
      websiteLink: "https://gpt4saas.vercel.app",
      imageUrl: Gpt4SaaS,
    },
    {
      name: "Portfolio",
      description:
        "Overwhelmed by long articles?  Sumz cuts through the clutter. This open-source web app summarizes lengthy articles and translates them into 10 languages, saving you time and offering global perspectives on your reading.",
      techStack: [
        "TypeScript",
        "React",
        "Aceternity UI",
        "TailWind CSS",
      ],
      githubLink: "https://github.com/Ahmad-Maartmesrini/Todo-List",
      websiteLink: "https://web-to-do-list-omega.vercel.app",
      imageUrl: toDoList,
    },
  ];

  return (
    <div id="portfolio" className="padding-section min-h-screen">
      <div className="pb-10">
        <h1 className="font-alegreya font-bold text-3xl sm:text-5xl md:text-7xl text-center text-[#560ea2]">
          Projects
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 font-bold">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
