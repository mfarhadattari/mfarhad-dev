import { FaGithub, FaLink, FaServer } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <a href={project?.liveLink} target="blank">
        <img
          className="rounded-t-lg h-[250px] w-full"
          src={project?.image}
          alt={project?.name}
        />
      </a>
      <div className="p-5">
        <a href={project.liveLink} target="blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project?.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project?.description}
        </p>
        <div className="flex gap-5 items-center">
          <a
            href={project?.liveLink}
            target="blank"
            className="inline-flex gap-2 items-center px-3 py-2 text-md font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300"
          >
            <FaLink></FaLink>Live
          </a>
          <a
            href={project?.clientSide}
            target="blank"
            className="inline-flex gap-2 items-center px-3 py-2 text-md font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300"
          >
            <FaGithub></FaGithub>Client
          </a>
          <a
            href={project?.serverSide}
            target="blank"
            className="inline-flex gap-2 items-center px-3 py-2 text-md font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <FaServer></FaServer>Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
