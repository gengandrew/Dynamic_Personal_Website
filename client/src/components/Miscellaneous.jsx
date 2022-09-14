import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "./InsertDBModal";
import MMM_Research from "../images/UWMadison_ME.png"
import DogModal from "../components/DogModal_Inline";

class Miscellaneous extends Component {
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
                            <Media object src={MMM_Research} style={{maxHeight: 700, maxWidth: 700, marginRight: "1rem"}} alt="BadgerBot" id="HeadImg"/>
                        </Media></Media>
                        </Col>                
                    <Col></Col>
                </Row>
                <Container>
                    <div style={{marginTop: "1rem"}}>
                    <h3 id="Misc">Miscellaneous</h3>
                    <p>
                        <ul><strong>Advance Computer Science Courses Taken:</strong>
                            <ul>
                                <li><em>CS 861 (Theoretical Foundations of Machine Learning)</em></li>
                                <li><em>CS 839 (Advanced Topics in Reinforcement Learning)</em></li>
                                <li><em>CS 839 (Learning More with Less Supervision)</em></li>
                                <li><em>CS 761 (Mathematical Foundations of Machine Learning)</em></li>
                                <li><em>CS 760 (Machine Learning)</em></li>
                                <li><em>CS 577 (Introduction to Algorithms)</em></li>
                                <li><em>CS 540 (Introduction to Artificial Intelligence)</em></li>
                                <li><em>CS 537 (Introduction to Operating Systems)</em></li>
                                <li><em>CS 536 (Introduction to Compilers)</em></li>
                                <li><em>CS 532 (Matrix Methods in Machine Learning)</em></li>
                                <li><em>CS 525 (Linear Programming Methods)</em></li>
                                <li><em>CS 520 (Introduction to the Theory of Computing)</em></li>
                            </ul>
                        </ul>
                        <ul><strong>Advance Math Courses Taken:</strong>
                            <ul>
                                <li><em>Math 632 (Introduction to Stochastic Processes)</em></li>
                                <li><em>Math 521 (Analysis I)</em></li>
                                <li><em>Math 431 (Introduction to the Theory of Probability)</em></li>
                                <li><em>Math 421 (The Theory of Single Variable Calculus)</em></li>
                            </ul>
                        </ul>
                        <ul><strong>Advance Engineering Courses Taken:</strong>
                            <ul>
                                <li><em>ECE 888 (Causal Inference)</em></li>
                                <li><em>ECE 729 (Information Theory)</em></li>
                            </ul>
                        </ul>
                    </p>
                    </div>
                </Container>
                <Container id="quote" style={{marginBottom: "4rem"}}>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <p>
                                "It is a pleasure to be able to quote lines to fit any occasion."
                            </p>
                            <p style={{textAlign: "right"}}>
                                  - Abraham Lincoln
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
 
export default Miscellaneous;