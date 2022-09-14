import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Causal from "../classes/Causal";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class CausalPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Causal />
      </div>
    );
  }
}

export default CausalPage;
