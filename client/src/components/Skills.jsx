import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "./InsertDBModal";
import poetry from "../images/Code_Poetry.jpg";

class Skills extends Component {
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
                    <div style={{marginTop: "2rem"}}>
                    <h3>Core Skills and Languages</h3>
                    <p> 
                        <ul><strong>Programming Languages:</strong> Java, C, C#, C++, Python, JavaScript, Matlab, SQL, Latex, html, and css.</ul>
                        <ul><strong>General Programming:</strong> Git, .NET framework, React Framework, Node.js, Linux/Unix</ul>
                        <ul><strong>Reserach Skills:</strong> Data Analysis, Case Study Interviews, Large Scale Surveys, Research Design, Laboratory and Workshop skills.</ul>
                        <ul><strong>General Skills:</strong> Project Management, and Fluency in English and Chinese</ul>                                
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
 
export default Skills;