const Banner = () => {
  return (
    <section className="container mx-auto mt-20">
      <div className="ms-20 w-1/2 ">
        <div className="space-y-2">
          <p className="text-xl">Web Developer</p>
          <h1 className="text-4xl font-Preahvihear font-bold">
            Mohammad Farhad
          </h1>
          <p>
            Front-End Web Developer With a specialization in front-end and
            back-end web development. Adoptable to new technology to enhance my
            skills and capability.
          </p>
        </div>
        <button className="rounded-full p-2 px-5 font-medium text-sm  mt-5 bg-gradient-to-r from-[#13ADC7] to-[#945DD6]">
          <a href="https://drive.google.com/file/d/1MDdd7zrZhMkySAMpBFf30RnJqWXARHRS">View Resume</a>
        </button>
      </div>
    </section>
  );
};

export default Banner;
