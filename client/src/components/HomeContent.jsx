import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import InsertDBModal from "./InsertDBModal";
import Headshot from "./Headshot";
import SurveyInLine from "./InsertDBModal_Inline";
import DogModal from "./DogModal_Inline";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class HomeContent extends Component {
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
          <Headshot />
          {/* <Col><Headshot /></Col> */}
          <Col></Col>
        </Row>
        <Row>
          <Col xs={this.state.ContentAlignment.LeftNRight}></Col>
          <Col xs={this.state.ContentAlignment.Middle}>
            <div>
              <p style={{marginTop: "2rem"}}>
                Hello there and welcome to my personal webpage!
                My name is Andrew Geng and I'm currently a Software Engineer for <a className="underLine" href="https://www.ibm.com/us-en/?ar=1">IBM </a> 
                at the <a className="underLine" href="https://developer.ibm.com/dwblog/2017/ibm-silicon-valley-lab-40th-anniversary/">Silicon Valley Lab</a> location.
                I'm also currently doing my graduate studies in <a className="underLine" href="https://www.engr.wisc.edu/department/electrical-computer-engineering/">Electrical and Computer Engineering </a> 
                under the supervision of <a className="underLine" href="http://pages.cs.wisc.edu/~sharonli/">Dr. Sharon Yixuan Li</a> and <a className="underLine" href="https://kangwooklee.com/">Dr. Kangwook Lee</a>.
              </p>
              <p>
                I previously studied <a className="underLine" href="https://www.cs.wisc.edu/">Computer Science </a> and <a className="underLine" href="https://www.math.wisc.edu/">Mathematics</a> at the <a className="underLine" href="https://www.wisc.edu/">University of Wisconsin-Madison</a>.
                Additionally, I've also and worked as a
                Applied Science Intern for <a className="underLine" href="https://www.amazon.science/">Amazon </a> in Manhattan, New York, a
                Full-time Software Engineer for <a className="underLine" href="https://www.ibm.com/us-en/?ar=1">IBM </a> in San Jose, California, a
                Software Engineering Intern for <a className="underLine" href="https://www.bostonscientific.com/content/gwc/en-US/Home.html">Boston 
                Scientific</a> in Minneapolis, Minnesota, and a
                Cybersecurity Intern for the <a className="underLine" href="https://it.wisc.edu/about/division-of-information-technology/cybersecurity/">Office of Cybersecurity</a> at the <a className="underLine" href="https://it.wisc.edu/">UW Division of Information Technology</a>.
              </p>
              <p>
                Broadly, my research interests are in deep learning, a branch of machine learning focusing on utilizing artificial neural networks to solve for real-world problems.
                More specifically, my current research interests revolve around:
                <ul>
                  <li>Detecting Semantically Shifted Out-of-distribution samples for deep neural networks.</li>
                  <li>Adapting to covariate shifted out-of-distribution samples.</li>
                  <li>Developing Robust Machine learning models in real-world machine learning models.</li>
                </ul>
              </p>
              <p>
                If you do not mind, please feel free to take this <SurveyInLine /> so I can learn a little bit more about you.
                In the meantime please feel free to browse through my webpage or simply view some <DogModal text="cute doggos"/> I found on the internet.
              </p>
            </div> 
          </Col>
          <Col xs={this.state.ContentAlignment.LeftNRight}></Col>
        </Row>
      </Container>
      <Container id="quote" style={{marginBottom: "4rem"}}>
        <Row>
            <Col xs="3"></Col>
            <Col xs="6">
                <p>
                    "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes."
                </p>
                <p style={{textAlign: "right"}}>
                    - Jack Handey
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

export default HomeContent;