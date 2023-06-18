import photo from "../assets/mfarhad.png";
const Banner = () => {
  return (
    <section className={`container mx-auto`} id="about">
      <div className="flex flex-col-reverse md:flex-row items-center p-10 gap-5">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-xl">Web Developer</p>
            <h1 className="text-4xl font-Preahvihear font-bold">
              Mohammad Farhad
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
          <img src={photo} alt="Mohammad Farhad" className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
