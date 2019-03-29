import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "./InsertDBModal";
import UWMadison_Main from "../images/UWMadison_Main.jpg";

class Education extends Component {
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
                <Container style={{marginBottom: "4rem"}}>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Media>
                                <Media>
                                    <Media object src={UWMadison_Main} alt="UWMadison_Main" id="HeadImg"/>
                                </Media>
                            </Media>
                        </Col>
                        <Col></Col>
                    </Row>
                    <div style={{marginTop: "2rem"}}>
                    <h3>Education</h3>
                    <p>
                        <ul>
                            Currently an undergraduate studying <strong><a className="underLine" href="https://www.cs.wisc.edu/">Computer Science</a></strong> and <strong><a className="underLine" href="https://www.engr.wisc.edu/department/electrical-computer-engineering/">Computer Engineering</a></strong> at the <strong><a className="underLine" href="https://www.wisc.edu/">University of Wisconsin Madison</a></strong>. 
                            <ul>
                                <li>Coordinator of the <strong><a className="underLine" href="https://uw-upl.github.io/">Undergraduate Project Lab</a></strong>.</li>
                                <li>Active member of <strong><a className="underLine" href="https://wis.triangle.org/">Triangle</a></strong>, a fraternity of Engineers, architects, and scientists.</li>
                                <li>Previous member of <strong><a className="underLine" href="https://badgerloop.com/#/home">Badgerloops</a></strong>.</li>
                            </ul>
                        </ul>
                    </p>
                    <p>
                        <ul>
                        Previously attended High School at <strong><a className="underLine" href="https://mcpasd.k12.wi.us/mhs/">Middleton High School</a></strong> where I participated in Model UN, Track and Field, Math Team, Programming Club, and was an active member of the First Robotics Team <strong><a className="underLine" href="http://www.badgerbots.org/">Badgerbots</a></strong>.
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
 
export default Education;