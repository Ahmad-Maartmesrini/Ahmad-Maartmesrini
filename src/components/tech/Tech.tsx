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
  bootstrap,
  nextjs,
  sass,
  reactQuery,
  svelteQuery,
  ai,
} from "../../assets/logos/index";

const techArray = [
  { img: nextjs, alt: "Next.js", href: "https://nextjs.org" },
  { img: tailwind, alt: "Tailwind CSS", href: "https://tailwindcss.com" },
  { img: vite, alt: "Vite", href: "https://vitejs.dev" },
  {
    img: svelteQuery,
    alt: "Svelte Query",
    href: "https://tanstack.com/query/latest/docs/framework/svelte/overview",
  },
  {
    img: js,
    alt: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { img: react, alt: "React", href: "https://react.dev" },
  {
    img: html,
    alt: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { img: sass, alt: "Sass", href: "https://sass-lang.com" },
  { img: ts, alt: "TypeScript", href: "https://www.typescriptlang.org" },
  { img: redux, alt: "Redux", href: "https://redux.js.org" },
  {
    img: reactQuery,
    alt: "React Query",
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  { img: git, alt: "Git", href: "https://git-scm.com" },
  { img: bootstrap, alt: "Bootstrap", href: "https://getbootstrap.com" },
  { img: api, alt: "Rest API", href: "https://www.ibm.com/topics/rest-apis" },
  { img: svelteKit, alt: "Svelte & Svelte Kit", href: "https://svelte.dev" },
  { img: ai, alt: "AI Prompting", href: "https://openai.com" },
  {
    img: css,
    alt: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

const Tech = () => {
  return (
    <div className="flex justify-center">
      <div className="logos">
        {techArray.map((tech, index) => (
          <a key={index} href={tech.href}>
            <img
              src={tech.img}
              alt={tech.alt}
              title={tech.alt}
              loading="eager"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tech;
