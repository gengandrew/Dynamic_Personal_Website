import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "../components/InsertDBModal";
import CausalImage from "../images/Causal.png";

class Project extends Component {
    ReloadWindow = e => {
        window.location.assign(e.target.name);
        setTimeout(function () {
          window.location.reload();
        }, 8);
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
                <Row>
                    <Col></Col>
                    <Col>
                        <Media><Media>
                            <Media object src={CausalImage} style={{maxHeight: 700, maxWidth: 700, marginRight: "1rem"}} alt="BadgerBot" id="HeadImg"/>
                        </Media></Media>
                    </Col>                
                    <Col></Col>
                </Row>
                <Container style={{marginTop: "2rem", marginBottom: "4rem"}}>
                    <div>
                    <h3>Math 888 Causal Inference (Homework 1)</h3>
                    <p>
                    <ul>
                        <b>Question 1-3: </b>I've updated my website main page <a className="underLine" onClick={this.ReloadWindow} name="/~ageng/#/" style={{cursor: "pointer"}}>here</a> 
                        which contains a brief description of myself and my interests.
                    </ul>
                    <ul>
                        <b>Question 4: </b>The most recent summer I was working as an intern for the Amazon Marketing Research team, and
                        a large of the problems and solutions we were attempting to solve boiled down to finding causality. Subsequently,
                        this kind of opened my eyes to the applications of causal inference as well as my own lack of knowledge towards the 
                        topic. Hence when I saw this course being offered I thought this would be a perfect opportunity to learn more about
                        the field.
                    </ul>
                    </p>
                    </div>
                </Container>
                <Container id="footer">
                    Powered by the React Framework and Caffine, source code can be found <a className="underLine" href="https://github.com/gengandrew/Dynamic_Personal_Website">here</a>
                </Container>
            </div>
        );
    }
}
/*
Code Poetry below if want to be added:
<Row>
    <Col></Col>
    <Col>
        <Media>
            <Media>
                <Media object src={poetry} style={{maxHeight: 700, maxWidth: 700}} alt="UWMadison_Main"/>
            </Media>
        </Media>
    </Col>
    <Col></Col>
</Row>
*/
 
export default Project;