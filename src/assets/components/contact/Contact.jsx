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
            <form
              className="contact-form"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <div className="wrapper-top-form">
                <p className="contact-text">
                  Please send me a message on{" "}
                  <a
                    className="href-link-contact"
                    href="https://www.linkedin.com/in/audun-thompson-anderssen-79b3b3222/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>{" "}
                  if you got any questions :)
                </p>
                <div className="top-form">
                  <div className="flex-div-contact">
                    <label for="first_name">First Name</label>
                    <input
                      placeholder="Ola"
                      value={firstName}
                      onChange={onFirstNameChange}
                      name="first_name"
                    ></input>
                  </div>
                  <div className="flex-div-contact">
                    <label for="last_name">Last Name</label>
                    <input
                      type="text"
                      placeholder="Nordmann"
                      value={lastName}
                      onChange={onLastNameChange}
                      name="last_name"
                    ></input>
                  </div>
                </div>
                <div className="top-form">
                  <div className="error-firstname">
                    {errorFirstName ? "minimum 3 characters" : ""}
                  </div>
                  <div className="error-lastname">
                    {errorLastName ? "minimum 3 characters" : ""}
                  </div>
                </div>
                <div className="middle-form">
                  <div className="flex-div-contact">
                    <label for="email">Email</label>
                    <input
                      type={email}
                      placeholder="email@example.com"
                      value={email}
                      name="email"
                      onChange={onEmailChange}
                    ></input>
                  </div>

                  <div className="error-email">
                    {errorEmail ? "not a valid email" : ""}
                  </div>
                  <label for="email">Message</label>
                  <textarea
                    placeholder="whats the question?"
                    value={bodyText}
                    onChange={onBodyChange}
                  ></textarea>
                  <div className="error-bodytext">
                    {errorBodyText ? "minumum 3 characters" : ""}
                  </div>
                </div>
              </div>
              <div className="bottom-form">
                <button type="submit" onClick={submitForm}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
