import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "./InsertDBModal";
import BadgerLoop from "../images/UWMadison_UPL.png";
import BadgerBot from "../images/BadgerBot.jpg";

class Project extends Component {
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
                            <Media object src={BadgerBot} style={{maxHeight: 700, maxWidth: 700, marginRight: "1rem"}} alt="BadgerBot" id="HeadImg"/>
                            <Media object src={BadgerLoop} style={{height: 320, width: 530}} alt="BadgerLoop" id="HeadImg"/>
                        </Media></Media>
                    </Col>                
                    <Col></Col>
                </Row>
                <Container style={{marginTop: "2rem", marginBottom: "4rem"}}>
                    <div>
                    <h3>Personal and Group Endevors</h3>
                    <p>
                        <ul><em>Race Accross America:</em>
                            <ul>
                                <li>Developer within a team of 15 Engineer and Data Scientists working on an application for Dave Haase in the Race Across America competition.</li>
                                <li>Partnered with companies such as Garmin, Mapbox, The Weather Company and UBIX.ai for technology and support.</li>
                                <li>Application developed utilizing a React/Typescript Front-End and an AWS backend.</li>
                                <li>Showcase webpage can be found <a className="underLine" href="http://raam.davehaase.com">here</a></li>
                                <li>Source code can be found <a className="underLine" href="https://github.com/raam-2019">here</a></li>
                            </ul>
                        </ul>
                        <ul><em>Team Envoy (Digital Pen Project):</em>
                            <ul>
                                <li>Gathered a group of 3 for the creation of a motion sensor Digital Pen which transfers hand drawn notes to digital formats.</li>
                                <li>Manufactured a working prototype utilizing Arduinos and accelerometers.</li>
                                <li>Utilized Fourier analysis and Kalman Filters in conjunction with accelerometer inputs, to read 3D motion.</li>
                            </ul>
                        </ul>
                        <ul><em>Devtool Interface:</em>
                            <ul>
                                <li>Web Application for interfacing between a traditional SQL server and a Web UI.</li>
                                <li>Built with the React Framework.</li>
                                <li>Open source project can be found <a className="underLine" href="https://github.com/gengandrew/Devtool_Interface">here</a>.</li>
                            </ul>
                        </ul>
                        <ul><em>BadgerLoops and Badgerbots:</em>
                            <ul>
                                <li>Winning Innovation award for the Hyperloop competition at SpaceX in Hawthorne California (Badgerloops)</li>
                                <li>Winning Chairman’s Award (2014) and Inspiration Award (2015) at the FRC Wisconsin Regionals, in addition to 2 time competitor at the FRC World Championship (BadgerBots)</li>
                                <li>Team lead in Robotic Arm Team (Badgerbots) and Breaking Team Member (Badgerloops)</li>
                            </ul>
                        </ul>
                        <ul><em>EX Games (Mobile Video Game Development):</em>
                            <ul>
                                <li>Guiding member in a group of 6 in the creation of an open world fantasy RPG.</li>
                                <li>Team lead in storyboard, combat mechanics, and general AI.</li>
                                <li>General AI and Combat mechanics development.</li>
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
                                "May not Music be described as the Mathematic of sense, Mathematic as Music of the reason? the soul of each the same!"
                            </p>
                            <p style={{textAlign: "right"}}>
                                - James Joseph Sylvester
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
 
export default Project;