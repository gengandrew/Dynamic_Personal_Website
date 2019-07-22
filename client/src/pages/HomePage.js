/*
  Main page for the given full stack webapp.
  The main page extends to the following classes:
    1. Components classes found in the components folder.
    2. All other providers and stores for the middlewear.
*/
import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import HomeContent from "../components/HomeContent";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <HomeContent />
      </div>
    );
  }
}

export default HomePage;
