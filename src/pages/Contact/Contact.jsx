import React from "react";
import "./Contact.css";
import { images } from "../../constants";

export default function Contact() {
  return (
    <div className="app__contact section__size contact-bg">
      <img src={images.cloud} alt="cloud background" />
      <h1 className="headtext__opensans">Reach out to me.</h1>
      <div className="app__contact-content">
        <div>
          <p className="p__opensans email">Email</p>
          <p className="headtext__opensans">pratikpr.official8@gmail.com</p>
        </div>
        <div>
          <p className="p__opensans email">Mobile</p>
          <p className="headtext__opensans">+9779863025519</p>
        </div>
        <div>
          <p className="p__opensans email">Address</p>
          <p className="headtext__opensans">Mhepi, Kathmandu</p>
        </div>
      </div>
    </div>
  );
}
