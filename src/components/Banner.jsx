import Typewriter from "react-ts-typewriter";
import personalInfo from "../data/personal.js";
const Banner = () => {
  return (
    <section className={`container mx-auto`} id="about">
      <div className="md:w-3/4 mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-10 gap-5">
        <div className="md:w-3/4 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-xl">{personalInfo.title}</p>
            <h1 className="text-4xl font-bold">
              <Typewriter cursor={false} text={personalInfo.name} />
            </h1>
            <p className="text-justify">{personalInfo.description}</p>
          </div>
          <div>
            <button className="rounded-full p-2 px-5 font-medium text-sm  mt-5 bg-gradient-to-r from-[#13ADC7] to-[#945DD6]">
              <a href={personalInfo.resume}>My Resume</a>
            </button>
          </div>
        </div>
        <div>
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[280px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
