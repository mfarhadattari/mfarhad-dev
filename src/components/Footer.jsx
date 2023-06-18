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
    <footer className="container mx-auto p-10" id="contract">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 md:w-3/4 mx-auto ">
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
        <div className="flex flex-col items-center">
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
