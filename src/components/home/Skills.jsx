import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { SiJavascript, SiDjango, SiMongodb, SiNetlify, SiHeroku } from "react-icons/si"
import { FaGithub, FaHtml5, FaCss3, FaReact, FaPython, FaNodeJs } from "react-icons/fa"
import { BsBootstrapFill } from "react-icons/bs"

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 className="display-4 pb-5 text-center">
          Skills
        </h2>
        <div className="row p-2">

          <FaGithub className="col stackicons"/>
          <FaHtml5 className="col stackicons"/>
          <FaCss3 className="col stackicons"/>
          <FaReact className="col stackicons"/>
          <FaPython className="col stackicons"/>
          <FaNodeJs className="col stackicons"/>
          </div>
        <div className="row p-2">
          <BsBootstrapFill className="col stackicons"/>
          <SiJavascript className="col stackicons"/>
          <SiDjango className="col stackicons"/>
          <SiMongodb className="col stackicons"/>
          <SiHeroku className="col stackicons"/>
          <SiNetlify className="col stackicons"/>
          {/* {hardSkills.map((skill, index) => (
          <div className="col">

          {skill}
          </div>
          // <i className={`fab ${skill.image} col justify-content-center text-center fa-3x stackicons`} />
          ))} */}

        </div>

        {/* <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs> */}
      </Container>
    </Jumbotron>
  );
});

export default Skills;
