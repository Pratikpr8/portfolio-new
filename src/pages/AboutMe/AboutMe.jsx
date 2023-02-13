import React from "react";
import "./AboutMe.css";
import { images } from "../../constants";
import { FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiRedux } from "react-icons/si";

export default function AboutMe() {
  return (
    <div className="app__aboutme section__size">
      <img src={images.cloud} alt="cloud background" />
      <div className="app__aboutme-content">
        <div className="app__aboutme-content_skills">
          <h1 className="headtext__opensans aboutme-titles">Skills</h1>
          <p className="p__opensans ">
            <FaReact
              color="#a6a6a6"
              fontSize={20}
              style={{ marginRight: "0.4rem" }}
            />
            React
          </p>
          <p className="p__opensans ">
            <DiJavascript1
              color="#a6a6a6"
              fontSize={20}
              style={{ marginRight: "0.4rem" }}
            />
            JavaScript
          </p>
          <p className="p__opensans">
            <AiFillGithub
              color="#a6a6a6"
              fontSize={20}
              style={{ marginRight: "0.4rem" }}
            />
            Git
          </p>
          <p className="p__opensans">
            <FaSass
              color="#a6a6a6"
              fontSize={20}
              style={{ marginRight: "0.4rem" }}
            />
            SASS/SCSS
          </p>
          <p className="p__opensans">
            <FaBootstrap
              color="#a6a6a6"
              fontSize={20}
              style={{ marginRight: "0.4rem" }}
            />
            Bootstrap
          </p>
          <p className="p__opensans">
            <SiRedux
              color="#a6a6a6"
              fontSize={20}
              style={{ marginRight: "0.4rem" }}
            />
            Basic Redux
          </p>
        </div>
        <div className="app__aboutme-content_links">
          <h1 className="headtext__opensans aboutme-titles">Social Links</h1>
          <p className="p__opensans">
            <AiFillGithub
              color="#a6a6a6"
              fontSize={20}
              style={{ marginRight: "0.4rem" }}
            />
            Github
          </p>
          <p className="headtext__opensans">
            <a
              href="https://github.com/Pratikpr8"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
