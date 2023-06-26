import ProjectCard from "./ProjectCard";
import projects from "../data/projects.js";

const Project = () => {
  return (
    <section className="container mx-auto my-10" id="project" >
      <h1 className="text-center text-4xl" data-aos="zoom-in">
        PROJECTS
      </h1>
      <div
        className="my-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 "
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Project;
