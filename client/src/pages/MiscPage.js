import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Miscellaneous from "../components/Miscellaneous";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class MiscPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Miscellaneous />
      </div>
    );
  }
}

export default MiscPage;
