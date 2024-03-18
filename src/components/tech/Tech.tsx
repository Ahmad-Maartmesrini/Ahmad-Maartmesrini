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
  githubLogo,
  git,
} from "../../assets/logos/index";

const Tech = () => {
  return (
    <div className="logos">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
        <img src={html} alt="HTML5" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
        <img src={css} alt="CSS3" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <img src={js} alt="JavaScript" />
      </a>
      <a href="https://www.typescriptlang.org">
        <img src={ts} alt="TypeScript" />
      </a>
      <a href="https://react.dev">
        <img src={react} alt="React" />
      </a>
      <a href="https://redux.js.org">
        <img src={redux} alt="Redux" />
      </a>
      <a href="https://tailwindcss.com">
        <img src={tailwind} alt="Tailwind CSS" />
      </a>
      <a href="https://github.com">
        <img src={githubLogo} alt="GitHub" />
      </a>
      <a href="https://git-scm.com">
        <img src={git} alt="Git" />
      </a>
      <a href="https://vitejs.dev">
        <img src={vite} alt="Vite" />
      </a>
    </div>
  );
};

export default Tech;
