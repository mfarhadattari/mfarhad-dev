import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import personalInfo from "../data/personal.js";

const Footer = () => {
  return (
    <footer className="container mx-auto p-5" id="contract">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mx-auto ">
        <div className="text-xl space-y-2">
          <p className="flex gap-2 items-center">
            <FaPhone></FaPhone>{personalInfo.phone}
          </p>
          <p className="flex gap-2 items-center">
            <FaEnvelope></FaEnvelope>
            <a href="mailto:mfarhad.dev@gmail.com">{personalInfo.email}</a>
          </p>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            {personalInfo.location}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-5 text-3xl">
            <a href={personalInfo.github}>
              <FaGithub></FaGithub>
            </a>
            <a href={personalInfo.linkedin}>
              <FaLinkedin></FaLinkedin>
            </a>
            <a href={personalInfo.facebook}>
              <FaFacebook></FaFacebook>
            </a>
          </div>
          <div className="mt-3 flex flex-col items-end">
            <p className="flex items-center gap-3">
              Developed By <FaHeart className="text-red-500"></FaHeart>
            </p>
            <p>Mohammad Farhad</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
