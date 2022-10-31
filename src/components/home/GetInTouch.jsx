import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <div className="contact">
      <h2 className="display-4 p-3 text-center" id="contact">{heading}</h2>
      <p className="lead text-center pb-4">
        {message} <br></br><br></br>
        {/* <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a> */}
        {email}
      </p>
    </div>
  );
};

export default GetInTouch;
