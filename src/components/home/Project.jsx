import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import { configure } from "@testing-library/react";

const Project = (props) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="container mb-0 projects">
     

      <h2 className="display-4 pb-5 text-center">
          Projects
        </h2>
      
        <Row className="d-flex justify-content-evenly">
          {props.projects.map((project, index) => (
            <div className="col-md-6 col-xs-12 mb-5 projectcol">

              <ProjectCard project = {project}/>
            </div>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
