import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "./InsertDBModal";
import CompSciBuilding from "../images/comp_sci.jpeg"
import GradNorm from "../images/gradnorm.png"

class Research extends Component {
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
                                    <Media object src={CompSciBuilding} style={{maxHeight: 1000, maxWidth: 850}} alt="Computer Science Building" id="HeadImg"/>
                                </Media>
                            </Media>
                            <a className="underLine" href="https://www.cs.wisc.edu/" style={{float: "right", fontSize: "12px", fontStyle: "italic"}} id="HeadImg_Link">- Department of Computer Science</a>
                        </Col>
                        <Col></Col>
                    </Row>
                    <div style={{marginTop: "1rem"}}>
                    <h3 id="Work_Experiences">Publications</h3>
                    <Media style={{maxWidth: "75%", marginLeft: "1.5rem", marginTop:  "1rem"}}>
                        <Media left href="https://arxiv.org/abs/2110.00218">
                            <Media object src={GradNorm} style={{maxWidth: "350px", marginLeft: "2rem"}} alt="GradNorm" />
                        </Media>
                        <Media body style={{marginLeft: "1rem"}}>
                            <Media heading>On the Importance of Gradients for Detecting Distributional Shifts in the Wild</Media>
                            Detecting out-of-distribution (OOD) data has become a critical component in ensuring the safe deployment of machine learning models. Existing OOD detection approaches primarily rely on the output for deriving OOD scores, while largely overlooking information from the gradient space. In this paper, we present GradNorm, a simple and effective approach for detecting OOD inputs by utilizing information extracted from the gradient space.
                        </Media>
                     </Media>
                    </div>
                </Container>
                <Container id="quote" style={{marginBottom: "4rem"}}>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <p>
                                "We shall spare you the details (but if you insist, we used…, applied the expansion… twice, and sacrificed a black chicken."
                            </p>
                            <p style={{textAlign: "right"}}>
                            <a className="underLine" href="https://arxiv.org/pdf/1401.7997.pdf">- Rio et al.</a>
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
 
export default Research;