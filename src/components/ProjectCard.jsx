import { FaGithub, FaLink, FaServer } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-white rounded-lg shadow relative h-[500px]"
      data-aos="fade-up"
    >
      <img
        className="rounded-t-lg h-[250px] w-full"
        src={project?.image}
        alt={project?.name}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project?.name}
        </h5>
        <p className="mb-3 font-normal  dark:text-gray-400 text-black">
          {project?.description}
        </p>
        <div className="text-black flex flex-wrap gap-x-3 font-bold">
          {project.technology.map((tec, id) => (
            <li className="list-none text-gray-600" key={id}>
              {tec}
            </li>
          ))}
        </div>
        <div className="flex gap-5 items-center absolute bottom-3">
          <a
            href={project?.liveLink}
            target="blank"
            className="inline-flex gap-2 items-center px-3 py-2 text-md font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300  relative"
          >
            <div className="absolute  -top-1  -right-1">
              <span className="relative flex justify-center items-center h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
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
