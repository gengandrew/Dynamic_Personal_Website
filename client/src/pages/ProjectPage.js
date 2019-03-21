import React, { Component } from "react";
import { Provider } from "react-redux";
//import store from "./store";
import Sidebar from "../components/Sidebar2";
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
