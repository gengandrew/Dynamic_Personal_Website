import React, { Component } from "react";
import { Collapse } from "reactstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, background: "#7386d5" };
  }

  toggle() {
    if (this.state.collapse) {
      this.setState({ background: "#7386d5" });
    } else {
      this.setState({ background: "#6d7fcc" });
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Education">Education</a>
          </li>
          <li>
            <a href="/Core_Skills_and_Programming_Languages">Core Skills and Programming Languages</a>
          </li>
          <li>
            <a href="/Work_and_Internship_Experiences">Work and Internship Experiences</a>
          </li>
          <li>
            <a href="/Personal_and_Group_Endevors">Personal and Group Endevors</a>
          </li>
          <li>
            <a href="/Hobbies_and_Intrestes">Hobbies and Intrestes</a>
          </li>
          <li>
            <a href="/Miscellaneous">Miscellaneous</a>
          </li>
          <li className="active">
            <a
              href="#placeHolder"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={this.toggle}
              style={this.state}
            >
              Favorites
            </a>
            <Collapse isOpen={this.state.collapse}>
                <div class="panel_right">
                    <div class="panel panel-default panel-affix" id="myScrollspy">
                        <div class="panel-body">
                            <div id="toc"></div>
                        </div>
                    </div>
                </div>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
