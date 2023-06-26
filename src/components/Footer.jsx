import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto p-5 animate-pulse">
      <div className="flex flex-col items-end">
        <div className="mt-3 flex flex-col items-end">
          <p className="flex items-center gap-3">
            Developed By <FaHeart className="text-red-500 animate-ping"></FaHeart>
          </p>
          <p>Mohammad Farhad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
