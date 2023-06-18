import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto p-10">
      <div className="flex justify-between w-3/4 mx-auto items-end">
        <div className="text-xl space-y-2">
          <p className="flex gap-2 items-center">
            <FaPhone></FaPhone>01568306714 , 01873141933
          </p>
          <p className="flex gap-2 items-center">
            <FaEnvelope></FaEnvelope>
            <a href="mailto:mfarhad.dev@gmail.com">mfarhad.dev@gmail.com</a>
          </p>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            Chattogram, Bangladesh
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-5 text-3xl">
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
          <div className="mt-3 text-right">
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
