import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);
  useHoverEffect(projectRightRef, project.img1, project.img2);

  return (
    <div className="project grid grid-cols-5">
      <div className="project-left col-span-3 flex flex-col gap-8">
        <span className="text-7xl text-white/50">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-4xl leading-relaxed tracking-wider text-cyan-400">
          {project.title}
        </h3>
        <p className="text-white/75">{project.description}</p>
        <span className="text-cyan-400 flex gap-4 flex-wrap leading-none">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
        <div className="flex gap-8 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase py-4 px-8 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-50/20 duration-500"
          >
            Live Site
          </a>
          <a
            href={project.frontEndLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase py-4 px-8 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-50/20 duration-500"
          >
            Front-End Code
          </a>
          {project.backEndLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase py-4 px-8 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-50/20 duration-500"
            >
              Back-End Code
            </a>
          )}
        </div>
      </div>
      <div
        className="project-right col-span-2 justify-self-end"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
