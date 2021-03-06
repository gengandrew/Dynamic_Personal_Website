import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Project from "../components/Project";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class ProjectPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Project />
      </div>
    );
  }
}

export default ProjectPage;
