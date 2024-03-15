import X from "../assets/x.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <div className="py-10 h-32 flex justify-center items-end gap-6">
      <a href="https://twitter.com/Ahmad_mrtm">
        <img src={X} alt="X" className="w-8"/>
      </a>
      <a href="https://github.com/Ahmad-Maartmesrini">
        <img src={github} alt="github" className="w-8"/>
      </a>
    </div>
  );
};

export default Footer;
