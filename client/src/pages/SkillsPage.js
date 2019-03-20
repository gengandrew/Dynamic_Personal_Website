import React, { Component } from "react";
import { Provider } from "react-redux";
//import store from "./store";
import Sidebar from "../components/Sidebar2";
import Skills from "../components/Skills";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class SkillsPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Skills />
      </div>
    );
  }
}

export default SkillsPage;