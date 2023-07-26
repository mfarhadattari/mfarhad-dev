import Typewriter from "react-ts-typewriter";
import personalInfo from "../data/personal.js";
const Banner = () => {
  return (
    <section className={`container mx-auto my-10`} id="about">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-10 gap-5">
        <div className="md:w-3/5 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-xl">
              <Typewriter
                text={personalInfo.title}
                loop={true}
                speed={100}
                delay={3000}
              ></Typewriter>
            </p>

            <h1 className="text-4xl font-bold">
              <Typewriter cursor={false} speed={100} text={personalInfo.name} />
            </h1>
            <p className="text-justify">{personalInfo.description}</p>
          </div>
          <div>
            <button className="rounded-full p-2 px-5 font-medium text-sm  mt-5 bg-gradient-to-r from-[#13ADC7] to-[#945DD6] animate-pulse">
              <a href={personalInfo.resume}>Download Resume</a>
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-[200px] h-[250px] md:w-[300px] md:h-[350px] mx-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
