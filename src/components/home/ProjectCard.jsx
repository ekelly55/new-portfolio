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
        {/* <Card.Body>
          <Card.Title as="h5">{project.name} </Card.Title>
          <Card.Text>
            <div className=" container techSection">
              <ul className=" row techList">
                {project.tech.map((tech, index) => (
                  <li className="col-4">{tech}</li>
                ))}
              </ul>
            </div>
            {project.description} 
          </Card.Text>
              <CardButtons live={project.live} git={project.git}/>
        </Card.Body> */}
      
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

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
          <a
            key={language}
            className="card-link"
            href={repo_url + `/search?l=${language}`}
            target=" _blank"
            rel="noopener noreferrer"
          >
            <span className="badge bg-light text-dark">
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </span>
          </a>

        ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
