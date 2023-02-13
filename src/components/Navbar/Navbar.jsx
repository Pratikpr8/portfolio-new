import React, { useState } from "react";
import { images } from "../../constants";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Pp logo" />
        <p className="headtext__opensans">
          Pratik<span> Puri</span>
        </p>
      </div>

      <div className="app__navbar-links">
        <ul className="app__navbar-list">
          <li className="p__opensans">
            <Link to="/">Home</Link>
          </li>
          <li className="p__opensans">
            <Link to="/aboutme">About Me</Link>
          </li>
          <li className="p__opensans">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="p__opensans">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="app__navbar-smallscreen-links">
        <GiHamburgerMenu
          color="#0072F5"
          fontSize={32}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center">
            <GiCrossMark
              color="#0072F5"
              fontSize={32}
              onClick={() => {
                setToggleMenu(false);
              }}
            />

            <ul className="app__navbar-smallscreen-list">
              <li onClick={() => setToggleMenu(false)} className="p__opensans">
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setToggleMenu(false)} className="p__opensans">
                <Link to="/aboutme">About Me</Link>
              </li>
              <li onClick={() => setToggleMenu(false)} className="p__opensans">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li onClick={() => setToggleMenu(false)} className="p__opensans">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
