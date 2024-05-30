import "./tech.css";
import {
  html,
  css,
  js,
  react,
  ts,
  tailwind,
  redux,
  vite,
  git,
  svelteKit,
  api,
} from "../../assets/logos/index";

const techArray = [
  {
    img: html,
    alt: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    img: css,
    alt: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    img: js,
    alt: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { img: ts, alt: "TypeScript", href: "https://www.typescriptlang.org" },
  { img: svelteKit, alt: "Svelte Kit", href: "https://svelte.dev" },
  { img: react, alt: "React", href: "https://react.dev" },
  { img: redux, alt: "Redux", href: "https://redux.js.org" },
  { img: tailwind, alt: "Tailwind CSS", href: "https://tailwindcss.com" },
  // { img: gitlab, alt: "GitLap", href: "https://gitlap.com" },
  // { img: githubLogo, alt: "GitHub", href: "https://github.com" },
  { img: git, alt: "Git", href: "https://git-scm.com" },
  { img: vite, alt: "Vite", href: "https://vitejs.dev" },
  { img: api, alt: "Rest API", href: "https://www.ibm.com/topics/rest-apis" },
];

const Tech = () => {
  return (
    <div className="flex justify-center">
      <div className="logos">
        {techArray.map((tech, index) => (
          <a key={index} href={tech.href}>
            <img src={tech.img} alt={tech.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tech;
