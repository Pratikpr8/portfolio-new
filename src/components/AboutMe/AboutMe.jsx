import React from "react";
import { images } from "../../constants";
import "./AboutMe.css";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();

  const handleContact = () => {
    return navigate("/portfolio-new/contact");
  };

  return (
    <div className="app__home section__size">
      <div className="app__home-content">
        <div className="app__home-content_pic">
          <img src={images.pic} alt="pratik pic" loading="lazy" />
          <div className="app__home-content_pic-gradient" />
        </div>
        <div className="app__home-content_info">
          <h2 className="p__opensans title">Front End Developer</h2>
          <h2 className="headtext__opensans name">Pratik Puri</h2>
          <p className="p__opensans description">
            As a developer, I'm incredibly passionate and committed to my work.
            I work hard every day to update and add to my knowledge in order to
            advance my career and my personal development.
          </p>
          <div className="app__home-btn-container">
            <button className="btn home-cv">Download CV</button>
            <button onClick={handleContact} className="btn home-contact">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
