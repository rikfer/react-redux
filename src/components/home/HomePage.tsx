import React from "react";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => (
  <div className="jumbotron">
    <h1>Challenge</h1>
    <p>React, Redux and Jest.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
