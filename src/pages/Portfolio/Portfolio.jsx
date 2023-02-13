import React, { useRef, useState } from "react";
import "./Portfolio.css";
import { images } from "../../constants";
import { Card } from "../../components";
import { data } from "../../constants";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Portfolio() {
  const scrollRef = useRef(null);
  const [toggleRight, setToggleRight] = useState(false);

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <div className="app__portfolio section__size">
      <img src={images.cloud} alt="cloud background" id="cloud" />
      <h1 className="headtext__opensans">Check out some of my projects...</h1>
      <div className="app__portfolio-main">
        <div className="app__portfolio-content" ref={scrollRef}>
          <div className="app__portfolio-content_projects">
            {data.projects.map((project) => {
              return (
                <div key={project.id} className="app__portfolio-card">
                  <Card {...project} />
                </div>
              );
            })}
          </div>

          <AiOutlineRight
            color="#000"
            fontSize={38}
            className="arrow-right"
            onClick={() => {
              scroll(300);
              setToggleRight(true);
            }}
          />

          {toggleRight && (
            <AiOutlineLeft
              color="#000"
              fontSize={38}
              className="arrow-left"
              onClick={() => scroll(-300)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
