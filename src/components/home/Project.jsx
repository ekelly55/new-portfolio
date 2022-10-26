import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { configure } from "@testing-library/react";

const Project = (props) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
         <Row>
          {props.projects.map((project, index) => (
        <h2 className="display-4 pb-5 text-center">{project.name}</h2>
                 
          // <ProjectCard
          //       // key={`project-card-${index}`}
          //       // id={`project-card-${index}`}
          //       // value={project}
          //    /> 
             ))}
             </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
