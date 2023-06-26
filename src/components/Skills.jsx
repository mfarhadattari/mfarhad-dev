import Typewriter from "react-ts-typewriter";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section className="container mx-auto my-10" id="skill">
      <h1 className="text-center text-4xl" data-aos="zoom-in">
        SKILLS
      </h1>
      <div className="w-fit mx-auto grid grid-cols-2 md:grid-cols-5 justify-center  mt-10">
        {skills.map((skill, id) => (
          <div
            key={id}
            className="rounded-lg p-5  gap-2 flex flex-col items-center justify-center"
            data-aos="fade-up"
          >
            <div className={`flex justify-center items-center animate-bounce border p-4 rounded-full`}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-[50px] w-[50px]"
              />
            </div>

            <h2 className="text-center text-xl animate-pulse">
              <Typewriter text={skill.name} cursor={false}></Typewriter>
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
