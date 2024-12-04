import React from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/projects/1">project 1</Link>
          <Link to="/projects/2">project 2</Link>
          <Link to="/projects/3">project 3</Link>
          <Link to="/projects/4">project 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectList;
