import { Link } from "react-router-dom";
import icon from "../../public/icon.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="w-full px-20 py-10 sticky top-0 z-50 flex justify-between items-center bg-slate-950">
      <div className="flex gap-2 items-center">
        <img src={icon} alt="Mohammad Farhad" className="w-7 h-7" />
        <h2 className="text-2xl font-Preahvihear">
          <a href="https://mfarhad-dev.web.app">MOHAMMAD FARHAD</a>
        </h2>
      </div>
      <div className="flex gap-5 text-xl">
        <Link>About</Link>
        <Link>Skills</Link>
        <Link>Project</Link>
        <Link>Contract</Link>
      </div>
      <div className="flex gap-3 text-2xl">
        <a href="https://github.com/mfarhadattari">
          <FaGithub></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/mfarhad-dev">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://www.facebook.com/mfarhad.attari.qadari">
          <FaFacebook></FaFacebook>
        </a>
      </div>
    </nav>
  );
};

export default Header;
