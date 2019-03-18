import React, { Component } from "react";
import { Button, Container, Row, Col } from 'reactstrap';
import MainNavbar from "./MainNavbar";
import InsertDBModal from "./InsertDBModal";
import Headshot from "./Headshot";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Custom_Content extends Component {
  state = {
    ContentAlignment: {
      size: 12,
      order: 0,
      offset: 6
    },
    toggle: true
  }

  Sidebar_Click = () => {
    setTimeout(() => {
      if(this.state.toggle){
        this.setState({ ContentAlignment: {
          size: 12,
          order: 0,
          offset: 6
        }});
      } else {
        this.setState({ ContentAlignment: {
          size: 12,
          order: 0,
          offset: 6
        }});
      }
      this.setState({toggle: !this.state.toggle})
    }, 100)
  }

  render() {
    return (
      <div id="content">
      <Row>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="nav navbar-nav ml-auto">
              <li style={{ display: "inline" }}>
                <button type="button" id="sidebarCollapse" className="navbar-btn" onClick={this.Sidebar_Click}>
                  <span /> <span /> <span />
                </button>
              </li>
              <li>
                <InsertDBModal />
              </li>
            </ul>
          </div>
        </nav>
      </Row>
      <Container>
        <Row>
          <Col></Col>
          <Col><Headshot /></Col>
          <Col></Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Custom_Content;