import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Research from "../components/Research";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class ResearchPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Research />
      </div>
    );
  }
}

export default ResearchPage;
