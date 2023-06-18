import { useState } from "react";
import icon from "../../public/icon.png";
import { FaBars, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navOptions = (
    <>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skill">Skill</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      <li>
        <a href="#contract">Contract</a>
      </li>
    </>
  );
  return (
    <nav className="w-full p-5 md:px-10 lg:px-20 py-10 sticky top-0 z-50 bg-slate-950">
      <div className="flex justify-between items-center gap-5 w-full relative">
        <div className="flex gap-2 items-center">
          <img src={icon} alt="Mohammad Farhad" className="w-7 h-7" />
          <h2 className="md:text-2xl font-Preahvihear">
            <a href="https://mfarhad-dev.web.app">MOHAMMAD FARHAD</a>
          </h2>
        </div>
        <div className="flex gap-3 text-xl">
          <ul className="hidden md:flex gap-3 font-medium items-center">
            {navOptions}
          </ul>
        </div>
        <div className="flex gap-3 text-2xl items-center">
          <a href="https://github.com/mfarhadattari">
            <FaGithub></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/mfarhad-dev">
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://www.facebook.com/mfarhad.attari.qadari">
            <FaFacebook></FaFacebook>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          >
            {menuOpen ? <MdCancel></MdCancel> : <FaBars></FaBars>}
          </button>
        </div>
        <div
          className={`md:hidden absolute top-12 right-2 bg-slate-800 p-3 rounded-lg ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col font-medium rounded-lg">{navOptions}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
