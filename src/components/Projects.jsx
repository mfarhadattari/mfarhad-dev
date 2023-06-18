import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("../../public/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProject(data);
      });
  }, []);
  return (
    <section className="container mx-auto my-20">
      <h1 className="text-center text-4xl">PROJECT</h1>
      <div>
        {
        projects.map((project, index) => <div key={index}>{project.name}</div>)
        }
        </div>
    </section>
  );
};

export default Projects;
