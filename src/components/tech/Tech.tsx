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
    <>
      <div className="logos">
        <img src={html} alt="HTML5" />
        <img src={css} alt="CSS3" />
        <img src={js} alt="JavaScript" />
        <img src={ts} alt="TypeScript" />
        <img src={react} alt="React" />
        <img src={githubLogo} alt="GitHub" />
        <img src={tailwind} alt="Tailwind CSS" />
        <img src={redux} alt="Redux" />
        <img src={vite} alt="Vite" />
        <img src={git} alt="Git" />
      </div>
    </>
  );
};

export default Tech;
