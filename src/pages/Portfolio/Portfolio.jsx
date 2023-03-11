import React from "react";
import "./Portfolio.css";
import { data } from "../../constants";
import { RxEyeOpen } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";

export default function Portfolio() {
  return (
    <div className="app__portfolio">
      <div className="app__portfolio-gradient" />
      <h1 className="p__opensans port-heading">
        Check out some of my projects....
      </h1>
      <div className="app__portfolio-projects-list">
        {data.projects.map((project) => {
          return (
            <div
              key={project.id}
              className="app__porfolio-project flex__center"
            >
              <img src={project.imgurl} alt="project img" loading="lazy" />
              <h1 className="headtext__opensans">{project.title}</h1>
              <a
                className="p__opensans"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxEyeOpen fontSize={30} className="svg-color port" />
                Open Project
              </a>
              <a
                className="p__opensans"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub fontSize={30} className="svg-color port" />
                Github Repo
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
