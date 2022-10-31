import React from "react";
import Container from "react-bootstrap/Container";
import GetInTouch from "./home/GetInTouch";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="text-center " bsClass="footer" id="footer">
      <Container>
        <GetInTouch
         heading={props.heading}
         message={props.message}
         email={props.email} />
      </Container>
    </footer>
  );
};

export default Footer;
