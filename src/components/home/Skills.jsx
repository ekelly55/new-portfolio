import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import {DiDjango, DiMongodb, DiHeroku} from "react-icons/di"
import {SiNetlify} from "react-icons/si"

const Skills = React.forwardRef(({ heading, faHardSkills, diHardSkills, softSkills }, ref) => {
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
          {heading}
        </h2>
        
        {faHardSkills.map((skill, index) => (
          <i className={`fab ${skill.image}  fa-3x stackicons`} />
))}
        <DiDjango className="django stackicons"/>
        <DiMongodb className="mongo stackicons"/>
        <DiHeroku className="heroku stackicons"/>
        <SiNetlify className="netlify stackicons"/>

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
