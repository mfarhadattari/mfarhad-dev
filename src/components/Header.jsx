import { useState } from "react";
import icon from "/icon.png";
import { FaBars, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import personalInfo from "../data/personal.js";

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skill",
  },
  {
    title: "Projects",
    href: "#project",
  },
  {
    title: "Contract",
    href: "#contract",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-5 md:px-10  py-10 sticky top-0 z-50 bg-slate-950">
      <div className="flex justify-between items-center gap-5 w-full relative">
        <div className="flex gap-2 items-center">
          <img src={icon} alt="Mohammad Farhad" className="w-7 h-7" />
          <h2 className="md:text-2xl ">
            <a href="/">MOHAMMAD FARHAD</a>
          </h2>
        </div>
        <div className="flex gap-3 text-xl">
          <ul className="hidden md:flex gap-3 font-medium items-center">
            {links.map((link, id) => (
              <li key={id}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 text-2xl items-center">
          <a href={personalInfo.github}>
            <FaGithub></FaGithub>
          </a>
          <a href={personalInfo.linkedin}>
            <FaLinkedin></FaLinkedin>
          </a>
          <a href={personalInfo.facebook}>
            <FaFacebook></FaFacebook>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          >
            {menuOpen ? <MdCancel></MdCancel> : <FaBars></FaBars>}
          </button>
        </div>
      </div>
      <div className={`w-full md:hidden ${menuOpen ? "" : "hidden"}`}>
        <ul className="flex flex-col font-medium mt-4 p-5 rounded-lg bg-slate-700 w-full">
          {links.map((link, id) => (
            <li key={id}  className="hover:bg-blue-500 w-full p-2">
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
