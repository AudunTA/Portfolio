import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bodyText, setBodyText] = useState("");

  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorBodyText, setErrorBodyText] = useState(false);
  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onBodyChange = (event) => {
    setBodyText(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("submitted!");
    console.log(email);
    console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    if (firstName.length < 3) {
      setErrorFirstName(true);
    } else {
      setErrorFirstName(false);
    }
    if (lastName.length < 3) {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
    if (bodyText.length < 3) {
      setErrorBodyText(true);
    } else {
      setErrorBodyText(false);
    }
  };
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
