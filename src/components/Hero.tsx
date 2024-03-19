import { CVicon, X, github } from "../assets/logos/index";
import CV from "../assets/Ahmad Maartmesrini's CV.pdf";

const Hero = () => {
  return (
    <div className="font-alegreya padding-section flex flex-col justify-center items-center sm:min-h-screen">
      <div className="p-5 sm:p-10 md:px-16 flex flex-col justify-center items-center rounded-t-3xl bg-gradient-to-b from-[#EDF6FD]">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-8xl text-[#7e14d6]">
          Ahmad Maartmesrini
        </h1>
        <h1 className="text-xl text-center sm:text-2xl md:text-3xl mt-[3vh] font-[400]">
          Crafting Elegant Frontend Experiences is My Mission
        </h1>
      </div>
      <div className="flex gap-5">
        <a href="https://twitter.com/Ahmad_mrtm" className="w-8">
          <img src={X} alt="X" />
        </a>
        <a href="https://github.com/Ahmad-Maartmesrini" className="w-8">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://flowcv.com/resume/cmdc2mruwj"
          target="_blank"
        >
          <img src={CVicon} alt="CV" className="w-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
