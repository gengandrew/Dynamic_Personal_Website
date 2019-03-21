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
                        <ul><em>Devtool Interface</em>
                            <ul>
                                <li>Web Application for interfacing between a traditional SQL/MongoDB server and a Web UI.</li>
                                <li>Built with the React Framework.</li>
                                <li>Open source project can be found <a className="underLine" href="https://github.com/gengandrew/Devtool_Interface">here</a>.</li>
                            </ul>
                        </ul>
                        <ul><em>Team Envoy (Digital Pen Project):</em>
                            <ul>
                                <li>Gathered a group of 3 for the creation of a motion sensory Digital Pen which transfers hand drawn notes to digital formats.</li>
                                <li>Manufactured a working prototype utilizing Arduinos and accelerometers.</li>
                                <li>Utilized Fourier analysis and Kalman Filters in conjunction with accelerometer inputs, to read 3D motion.</li>
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
                                <li>Team lead in story board, combat mechanics, and general AI.</li>
                                <li>General AI and Combat mechanics development.</li>
                            </ul>
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