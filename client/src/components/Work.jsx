import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "./InsertDBModal";
import BostonSci from "../images/BostonSci.png";
import IBMImage from "../images/IBM.png"

class Work extends Component {
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
                                    <Media object src={IBMImage} style={{maxHeight: 1000, maxWidth: 800}} alt="BM's Silicon Valley Lab" id="HeadImg"/>
                                </Media>
                            </Media>
                            <a className="underLine" href="https://www.ibm.com/us-en/?ar=1" style={{float: "right", fontSize: "12px", fontStyle: "italic"}} id="HeadImg_Link">- IBM's Silicon Valley Lab</a>
                        </Col>
                        <Col></Col>
                    </Row>
                    <div style={{marginTop: "1rem"}}>
                    <h3 id="Work_Experiences">Work and Internship Experiences</h3>
                    <p>
                        <ul><em><a className="underLine" href="https://www.ibm.com/us-en/?ar=1">IBM</a> (Software Intern) <i>(Summer 2019)</i></em>
                            <ul>
                                <li>Full Stack Software Intern for the IBM Systems team at the Silicon Valley Lab location.</li>
                                <li>Worked on developing backend Java applications with corresponding test case components.</li>
                                <li>Significantly improved runtime from 2 hours to 50 min, in addition to improving general manageability of code base.</li>
                            </ul>
                        </ul>
                        <ul><em><a className="underLine" href="http://www.bostonscientific.com/content/gwc/en-US/Home.html">Boston Scientific</a> (Software Engineering Intern) <i>(Summer 2018)</i></em>
                            <ul>
                                <li>Full Stack Developer and Project Manager for TimeTracker.</li>
                                <li>Application development with C# <em>(.Net Framework)</em> and SQL Express backend.</li>
                                <li>Managed quality assessment, UX interviews, and software validation for applications.</li>
                            </ul>
                        </ul>
                        <ul><em><a className="underLine" href="https://hci.cs.wisc.edu/">HCI Laboratory</a> (Undergraduate Researcher) <i>(2018 ~ present)</i></em>
                            <ul>
                                <li>Co-investigator for personal assistant project involving specialized vocal speech patterns.</li>
                                <li>Designed case study procedures and conducted in person experiments.</li>
                                <li>Conducted statistical analysis and exploration on collected experimental data.</li>
                            </ul>
                        </ul>
                        <ul><em><a className="underLine" href="https://it.wisc.edu/about/division-of-information-technology/cybersecurity/">DOIT Office of Cybersecurity</a> (Cybersecurity Intern) <i>(2017 ~ present)</i></em>
                            <ul>
                                <li>Part time security analyst and developer for the Office of Cybersecurity.</li>
                                <li>Assisting security officers with weekly and monthly reports on security incidents</li>
                                <li>Building on existing scripts and remodeling concurrently used internal applications.</li>    
                            </ul>
                        </ul>
                        <ul><em><a className="underLine" href="http://skoplab.weebly.com/ahna-skop.html">Dr. Ahna Skop's Laboratory</a> (Undergraduate Technician) <i>(December 2016 ~ January 2018)</i></em>
                            <ul>
                                <li>Maintaining laboratory computers, equipments, and databases.</li>
                                <li>Maintaining laboratory chemicals, solutions, plates, and etc.</li>
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
                                "It's true that hard work never killed anybody, but I figure why take the chance."
                            </p>
                            <p style={{textAlign: "right"}}>
                                - Ronald Reagan
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
 
export default Work;