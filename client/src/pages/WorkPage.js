import React, { Component } from "react";
import Sidebar from "../components/Sidebar2";
import Work from "../components/Work";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class WorkPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Work />
      </div>
    );
  }
}

export default WorkPage;
