import Typewriter from "react-ts-typewriter";
import photo from "../assets/mfarhad.png";
const Banner = () => {
  return (
    <section className={`container mx-auto`} id="about">
      <div className="md:w-3/4 mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-10 gap-5">
        <div className="md:w-3/4 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-xl">Web Developer</p>
            <h1 className="text-4xl font-Preahvihear font-bold">
              <Typewriter cursor={false} text="Mohammad Farhad" />
            </h1>
            <p className="text-justify">
              Front-End Web Developer With a specialization in front-end and
              back-end web development. Adoptable to new technology to enhance
              my skills and capability.
            </p>
          </div>
          <button className="rounded-full p-2 px-5 font-medium text-sm  mt-5 bg-gradient-to-r from-[#13ADC7] to-[#945DD6]">
            <a href="https://drive.google.com/file/d/1MDdd7zrZhMkySAMpBFf30RnJqWXARHRS">
              View Resume
            </a>
          </button>
        </div>
        <div>
          <img
            src={photo}
            alt="Mohammad Farhad"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
