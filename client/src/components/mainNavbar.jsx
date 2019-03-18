import React, { Component } from "react";
import InsertDBModal from "./InsertDBModal";
//import { Button } from "reactstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class MainNavBar extends Component {
  //state = {  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="nav navbar-nav ml-auto">
            <li style={{ display: "inline" }}>
              <button type="button" id="sidebarCollapse" className="navbar-btn">
                <span /> <span /> <span />
              </button>
            </li>
            <li>
            <InsertDBModal />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNavBar;
