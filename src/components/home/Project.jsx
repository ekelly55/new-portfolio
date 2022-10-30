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
      <Container className="container-sm projects justify-content-center align-content-center justify-items-center align-items-center text-align-center">
     

      <h2 className="display-4 pb-5 text-center">
          Projects
        </h2>
      
        <Row className="justify-content-center align-content-center justify-items-center align-items-center">
          {props.projects.map((project, index) => (
            <div className="col-md justify-content-center align-content-center justify-items-center align-items-center projectcol">

              <ProjectCard project = {project}/>
            </div>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
