import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <section className="container mx-auto my-20" id="project">
      <h1 className="text-center text-4xl">Project</h1>
      <div className="my-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Project;
