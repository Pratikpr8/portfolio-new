import React from "react";
import { images } from "../../constants";
import "./AboutMe.css";
import Zoom from "react-reveal/Zoom";
import cv from "../../assets/pratik-puri-resume.pdf";

export default function AboutMe() {
  return (
    <div className="app__home section__size">
      <div className="app__home-content">
        <Zoom bottom>
          <div className="app__home-content_pic">
            <img src={images.pic} alt="pratik pic" loading="lazy" />
            <div className="app__home-content_pic-gradient" />
          </div>
          <div className="app__home-content_info">
            <h2 className="p__opensans title">Front End Developer</h2>
            <h2 className="headtext__opensans name">Pratik Puri</h2>
            <p className="p__opensans description">
              As a developer, I'm incredibly passionate and committed to my
              work. I work hard every day to update and add to my knowledge in
              order to advance my career and my personal development.
              <br />
              <br />
              <strong style={{ color: "var(--color-black)" }}>
                HTML, CSS, JavaScript, React, Redux, Git, Firebase, MUI, SASS,
                Basic Figma.
              </strong>
            </p>
            <div className="app__home-btn-container">
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <button className="btn home-btn">Resume</button>
              </a>
              <a
                href="https://github.com/Pratikpr8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn home-btn">Github</button>
              </a>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
