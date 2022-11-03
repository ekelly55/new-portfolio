import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { SiJavascript, SiDjango, SiMongodb, SiNetlify, SiHeroku } from "react-icons/si"
import { FaGithub, FaHtml5, FaCss3, FaReact, FaPython, FaNodeJs } from "react-icons/fa"
import { BsBootstrapFill } from "react-icons/bs"

const ProjectCard = ({ project }) => {

  return (
    <div className="card justify-content-center align-content-center justify-items-center align-items-center shadow-lg m-3">

      
        <img className="projectpic d-block w-100 mx-auto" src={project.image} />
        <div className="overlay">
          <div className="content p-4">
            <h5 >{project.name}</h5>
            <p className="text-start" >{project.description}</p>
            <div className=" container techSection">
              <ul className=" row techList">
                {project.tech.map((tech, index) => (
                  <li className="col-4 mb-2">{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <CardButtons live={project.live} git={project.git}/>
            </div>
          </div>
        </div>
       
      
    </div>
  );
};

const CardButtons = ({ live, git }) => {
  return (
    <div className="">
      <a href={live} className="btn live btn-lg w-25 btn-block btn-outline-secondary mx-2" target="_blank">
        Live
      </a>
      <a href={git} className="btn git btn-lg w-25 btn-block btn-outline-secondary mx-2"target="_blank">
        GitHub
      </a>
    </div>
  );
};



export default ProjectCard;
