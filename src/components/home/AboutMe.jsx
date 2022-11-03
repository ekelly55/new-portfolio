import React from "react";

import { Jumbotron } from "./migration";


const AboutMe = () => {


  



  return (
    <Jumbotron id="aboutme" className="container-fluid m-0">
      <div className="row justify-content-evenly">
        <div className="col-4 imgcol justify-content-center">
          
            <img
              className="rounded-circle"
              src="https://i.imgur.com/elMCOhV.png"
              alt="profilepicture"
              width="300"
              height="300"
            />
          
        </div>
        <div className="col-8 col-md-6">
          <h2 className="display-4 mb-5 text-center">About Me</h2>
          <p className="lead">As a values-driven software engineer, educator and creative thinker, I have a passion for leveraging technology to serve people and change the world. I take pride and satisfaction in a job well-done, but also continuously pursue the next improvement. From my background as an educator, I know the importance of relationship building and collaboration to a team’s ability to deliver outstanding results on projects. I bring a wealth of organizational and collaborative soft skills as well as a full-suite of front- and backend web development abilities to the job. On a personal level, I relish creating things and diving into new adventures, a passion I carry into every new role.</p>
         
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg me-2"
                href="https://drive.google.com/file/d/1tm2Isoo7Cr2NmoY2z6SohKr6vbSpQd4G/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
              <a
                className="btn btn-outline-dark btn-lg ms-2"
                href={process.env.PUBLIC_URL + "/#contact"}
                // target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="contact"
              >
                Contact
              </a>
            </p>
          
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
