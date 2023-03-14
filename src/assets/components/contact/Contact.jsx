import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="wrapper-contact">
      {" "}
      <div
        className="top-bar top-bar-contact"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="border-div-flex"></div>
        <h2>Contact</h2>
        <div className="border-div"></div>
      </div>
      <div className="container-contact">
        <div className="container-portfolio-work">
          <div className="container-right-contact">
            <p className="contact-text">
              Please send me a message on{" "}
              <a
                className="href-link-contact"
                href="https://www.linkedin.com/in/audun-thompson-anderssen-79b3b3222/"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              or send a mail to aud-and2@online.no if you got any questions :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
