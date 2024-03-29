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
                            Currently pursuing my Masters at the <strong><a className="underLine" href="https://www.wisc.edu/">University of Wisconsin Madison</a></strong> on <strong><a className="underLine" href="https://www.engr.wisc.edu/department/electrical-computer-engineering/">Electrical and Computer Engineering</a></strong>.
                            <ul>
                                <li>Advisors: <strong><a className="underLine" href="https://kangwooklee.com/">Dr. Kangwook Lee</a></strong> and <strong><a className="underLine" href="http://pages.cs.wisc.edu/~sharonli/">Dr. Sharon Yixuan Li</a></strong>.</li>
                            </ul>
                        </ul>
                    </p>
                    <p>
                        <ul>
                            Bachelor of Science in <strong><a className="underLine" href="https://www.cs.wisc.edu/">Computer Science</a></strong> and <strong><a className="underLine" href="https://www.math.wisc.edu/">Mathematics</a></strong> at the <strong><a className="underLine" href="https://www.wisc.edu/">University of Wisconsin Madison</a></strong>.
                            <ul>
                                <li>Coordinator of the <strong><a className="underLine" href="https://uw-upl.github.io/">Undergraduate Projects Lab</a></strong>.</li>
                                <li>Active member of <strong><a className="underLine" href="https://wis.triangle.org/">Triangle</a></strong>, a fraternity of Engineers, architects, and scientists.</li>
                                <li>Advisors: <strong><a className="underLine" href="http://pages.cs.wisc.edu/~bilge/">Dr. Bilge Mutlu</a></strong>.</li>
                                <li>Thesis: <strong><a className="underLine" href="">Designing Emotionally Adapt Intelligent Agents</a></strong>.</li>
                            </ul>
                        </ul>
                    </p>
                    <p>
                        <ul>
                        Attended High School at <strong><a className="underLine" href="https://mcpasd.k12.wi.us/mhs/">Middleton High School</a></strong> in Middleton, Wisconsin where I participated in Model UN, Track and Field, Math Team, Programming Club, and the First Robotics Team <strong><a className="underLine" href="http://www.badgerbots.org/">Badgerbots</a></strong>.
                        </ul>
                    </p>
                    </div>
                </Container>
                <Container id="quote" style={{marginBottom: "4rem"}}>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <p>
                                "If you think education is expensive, try ignorance."
                            </p>
                            <p style={{textAlign: "right"}}>
                                - Derek Bok
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
 
export default Education;