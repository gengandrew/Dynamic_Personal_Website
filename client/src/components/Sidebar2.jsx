import React, { Component } from "react";
import { Collapse } from "reactstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, background: "#eb6864" };
  }

  toggle() {
    if (this.state.collapse) {
      this.setState({ background: "#eb6864" });
    } else {
      this.setState({ background: "#ec4f5f" });
    }
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Andrew's Awesome Content</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="/~ageng/#/">Home</a>
          </li>
          <li>
            <a href="/~ageng/#/Education">Education</a>
          </li>
          <li>
            <a href="/~ageng/#/Core_Skills_and_Programming_Languages">Core Skills and Programming Languages</a>
          </li>
          <li>
            <a href="/~ageng/#/Work_and_Internship_Experiences">Work and Internship Experiences</a>
          </li>
          <li>
            <a href="/~ageng/#/Personal_and_Group_Endeavors">Personal and Group Endeavors</a>
          </li>
          <li>
            <a href="/~ageng/#/Hobbies_and_Interests">Hobbies and Interests</a>
          </li>
          <li>
            <a href="/~ageng/#/Miscellaneous">Miscellaneous</a>
          </li>
          <li className="active">
            <a
              href="#placeHolder"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={this.toggle}
              style={this.state}
              id="dropDown"
            >
              Favorites
            </a>
            <Collapse isOpen={this.state.collapse}>
            <ul className="list-unstyled">
                <li>
                  <a href="https://uw-upl.github.io/">Undergraduate Project Lab</a>
                </li>
                <li>
                  <a href="https://hci.cs.wisc.edu/">Wisconsin HCI Lab</a>
                </li>
                <li>
                  <a href="http://skoplab.weebly.com/ahna-skop.html">Skop Lab</a>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
