import React, { Component } from "react";
import Sidebar from "../components/Sidebar2";
import Education from "../components/Education";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css"

class EducationPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Education />
      </div>
    );
  }
}

export default EducationPage;
