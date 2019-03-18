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
          <h3>Awesome Content</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a
              href="#placeHolder"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={this.toggle}
              style={this.state}
            >
              Bookmarks
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
          <li>
            <a href="/">App #1</a>
          </li>
          <li>
            <a href="/">App #2</a>
          </li>
          <li>
            <a href="/">App #3</a>
          </li>
          <li>
            <a href="/">App #4</a>
          </li>
          <li>
            <a href="/">App #5</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
