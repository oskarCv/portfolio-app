import React from "react";

export default function Home() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="#">
                <i className="fa fa-github-square" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter-square" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text"> Oscar Chavez </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>Enthusiastic Full Stack Developer 💻</h1>
              <span className="profile-role-tagline">
                Building web applications with React, Java and Python.
              </span>
            </span>
          </div>
          <div className="profile-optins">
            <button className="btn primary-btn"> Hire Me</button>
            <a
              href="oscar-chavez-java-sr-resume.pdf"
              download={"oscar-chavez-java-sr-resume.pdf"}
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
