import CVicon from "../assets/CV.png";
import X from "../assets/x.png";
import github from "../assets/github.png";
import CV from "../assets/Ahmad Maartmesrini's CV.pdf";

const Hero = () => {
  return (
    <div className="font-alegreya padding-section flex flex-col justify-center items-center">
      <div className="p-5 sm:p-10 md:px-16 flex flex-col justify-start items-center text-black rounded-t-3xl bg-gradient-to-b from-[#EDF6FD]">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl mb-5 text-[#560ea2]">
          Ahmad Maartmesrini
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-[400]">
          Crafting Elegant Frontend Experiences is My Mission
        </h1>
      </div>
      <div className="flex gap-5 mt-[12vh]">
        <a href="https://twitter.com/Ahmad_mrtm" className="w-8">
          <img src={X} alt="X" />
        </a>
        <a href="https://github.com/Ahmad-Maartmesrini" className="w-8">
          <img src={github} alt="github" />
        </a>
        <a href={CV} download="Ahmad Maartmesrini's CV">
          <img src={CVicon} alt="CV" className="w-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
