import React from "react";
import "./Card.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

export default function Card(props) {
  const { title, imgurl, url, github } = props;
  return (
    <div className="app__card">
      <div className="app__card-image">
        <img src={imgurl} alt="project" />
        <div className="app__card-overlay flex__center">
          <p
            style={{ fontWeight: 600, fontSize: "24px" }}
            className="p__opensans"
          >
            {title}
          </p>
        </div>
      </div>
      <p className="p__opensans links">
        <AiFillEye
          color="#000"
          fontSize={20}
          style={{ marginRight: "0.4rem" }}
        />
        <a href={url} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </p>
      <p className="p__opensans links">
        <AiFillGithub
          color="#000"
          fontSize={20}
          style={{ marginRight: "0.4rem" }}
        />
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitRepo
        </a>
      </p>
    </div>
  );
}
