import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaMobileAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yns9e8e",
        "template_ldwpblk",
        form.current,
        "RirW5Cc2UT-edwC1_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message Sent");
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="app__contact">
      <div className="app__contact-content">
        <Zoom left>
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
              <p className="p__opensans contact-email">
                pratikpuri.pr@gmail.com
              </p>
            </div>
          </div>
        </Zoom>

        <Zoom right>
          <div className="app__contact-content_form">
            <p className="p__opensans">Get in touch</p>
            <form
              className="app__contact-content_form-items"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="user_email"
                required
              />
              <textarea placeholder="Message" name="message" required />
              <button className="btn">Send Message</button>
            </form>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
