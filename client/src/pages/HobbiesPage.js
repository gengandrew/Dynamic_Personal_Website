import React, { Component } from "react";
import { Provider } from "react-redux";
//import store from "./store";
import Sidebar from "../components/Sidebar2";
import Hobbies from "../components/Hobbies";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class HobbiesPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Hobbies />
      </div>
    );
  }
}

export default HobbiesPage;

/*
May not Music be described as the Mathematic of sense, 
Mathematic as Music of the reason? the soul of each the same! 
- James Joseph Sylvester (1864)
*/
