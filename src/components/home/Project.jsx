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
        <h2>Projects</h2>
        <Row>
          {props.projects.map((project, index) => (
            <div className="col-6">

              <ProjectCard project = {project}/>
            </div>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
