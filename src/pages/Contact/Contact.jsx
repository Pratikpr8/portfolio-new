import React from "react";
import "./Contact.css";
import { FaMobileAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="app__contact">
      <div className="app__contact-content">
        <div className="app__contact-content_userinfo">
          <p className="p__opensans contact-details">Contact Details</p>

          <div className="app__contact-content_userinfo-items">
            <FaMobileAlt fontSize={40} className="svg-color" />
            <p className="p__opensans">+977 9863025519</p>
          </div>
          <div className="app__contact-content_userinfo-items">
            <MdLocationOn fontSize={40} className="svg-color" />
            <p className="p__opensans">Mhepi-Kathmandu, Nepal</p>
          </div>
          <div className="app__contact-content_userinfo-items">
            <AiOutlineMail fontSize={40} className="svg-color" />
            <p className="p__opensans contact-email">pratikpuri.pr@gmail.com</p>
          </div>
        </div>

        <div className="app__contact-content_form">
          <p className="p__opensans">Get in touch</p>
          <form className="app__contact-content_form-items">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Message" />
            <button className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
