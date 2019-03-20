import React, { Component } from "react";
import { Button, Media, Container, Row, Col } from 'reactstrap';
import MainNavbar from "./MainNavbar";
import InsertDBModal from "./InsertDBModal";
import Headshot from "./Headshot";
import About from "./About";
import JJS_Quote from "../images/ST_Quote2.jpg";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Custom_Content extends Component {
  state = {
    ContentAlignment: {
      LeftNRight: 1,
      Middle: 10
    },
    toggle: true
  }

  Sidebar_Click = () => {
    setTimeout(() => {
      if(this.state.toggle){
        this.setState({ ContentAlignment: {
          LeftNRight: 2,
          Middle: 8
        }});
      } else {
        this.setState({ ContentAlignment: {
          LeftNRight: 1,
          Middle: 10
        }});
      }
      this.setState({toggle: !this.state.toggle})
    }, 60)
  }

  render() {
    return (
      <div id="content">
      <Row>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%"}}>
          <div className="container-fluid">
            <ul className="nav navbar-nav" style={{float: "left"}}>
              <li style={{ display: "inline" }}>
                <button type="button" id="sidebarCollapse" className="navbar-btn" onClick={this.Sidebar_Click}>
                  <span /> <span /> <span />
                </button>
              </li>
            </ul>
            <ul className="nav navbar-nav" style={{float: "right"}}>
              <li style={{ display: "inline" }}>
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
        <Row>
          <Col xs={this.state.ContentAlignment.LeftNRight}></Col>
          <Col xs={this.state.ContentAlignment.Middle}>
            <About />
          </Col>
          <Col xs={this.state.ContentAlignment.LeftNRight}></Col>
        </Row>
      </Container>
      <Container id="quote">
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <p>
            To me, mathematics, computer science, and the arts are insanely related. They're all creative expressions.
            </p>
            <p style={{textAlign: "right"}}>
              - Sebastian Thrun
            </p>
          </Col>
          <Col xs="3"></Col>
        </Row>
      </Container>
      <Container id="footer">
        Powered by the React Framework and Caffine, source code can be found <a className="underLine" href="https://github.com/gengandrew/Dynamic_Personal_Website">here</a>
      </Container>
      </div>
    );
  }
}

export default Custom_Content;