import { X, github } from "../assets/logos/index";

const Hero = () => {
  return (
    <div className="font-alegreya padding-section flex flex-col justify-center items-center ">
      <div className="p-5 sm:p-10 md:px-16 flex flex-col justify-center items-center text-center rounded-t-lg bg-gradient-to-b from-[#EDF6FD]">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-8xl text-[#7e14d6]">
          Ahmad Maartmesrini
        </h1>
        <h3 className="text-lg sm:text-2xl md:text-3xl mt-[3vh] font-normal">
          {/* I'm Passionately Dedicated To Crafting Elegant Frontend Interfaces. */}
          Cross Platform Front End Developer
        </h3>
      </div>
      <div className="flex gap-5">
        <a
          href="https://twitter.com/Ahmad_mrtm"
          target="_blank"
          className="w-8"
        >
          <img src={X} alt="X" />
        </a>
        <a
          href="https://github.com/Ahmad-Maartmesrini"
          target="_blank"
          className="w-8"
        >
          <img src={github} alt="github" />
        </a>
        {/* <a
          href="https://flowcv.com/resume/cmdc2mruwj"
          target="_blank"
          className="w-8"
        >
          <img src={CVicon} alt="CV" />
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
