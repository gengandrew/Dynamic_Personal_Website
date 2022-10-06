import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "../components/InsertDBModal";
import CausalImage from "../images/causal/causal_representation_learning.png"
import Representation from "../images/causal/representation.png"
import BlackCat from "../images/causal/causal_cat_black.png"
import BrownCat from "../images/causal/causal_cat_brown.png"

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
                    <h3>Multimodality and Causal Representation Learning</h3>
                    <p>
                    <ul>
                    <em>(Note this project topic is subject to change!)</em>
                    </ul>
                    <h5>Project Proposal</h5>
                    <ul>
                    In recent years there has been an incredible effort at incorporating causality into deep learning. One of the ultimate goals 
                    in many of these attempts is to improve the generalization capabilities of modern deep learning models by leveraging the 
                    strong casual structures you can obtain through causal inference [1].
                    </ul>
                    <ul>
                    However, many of such attempts have yielded sometimes promising but mostly underwhelming results. This is in large part 
                    due to the dichotomy between the fields of causal inference and deep learning, and the difficulty of leveraging causality 
                    for tasks which are fundamentally statistical in nature [1]. 
                    </ul>
                    <ul>
                    But, one area of interest that has shown a lot of interest as of recently is the field of Causal Representation Learning. 
                    In particular one direction of some modern Causal Representation Learning literatures is to leverage causality as a form 
                    of weak supervision to help better shape the learned representation of the resulting model.
                    </ul>
                    <ul>
                    In parallel, there have been exciting advances in the field of multimodal classification models, such as CLIP [2]. These 
                    multimodal models have generated not only impressive pre-trained models, but also models which have incredible generalization 
                    abilities to distributionally shifted inputs.
                    </ul>
                    <ul>
                    Although unintuitive at first, I believe the exciting advances in multimodal representation learning can be attributed, 
                    in some small aspect, to weak causal supervision. If this is indeed true, then it would go a long way in informing 
                    researchers about why multimodal models are so successful and may lead to improvements to current techniques.
                    Specifically, in this project, I hope to provide some exploratory analysis looking 
                    to confirm several hypotheses. Specifically, I am looking to explore the following hypotheses:
                    </ul>
                    <ul>
                        <ul>
                        <li><em>The text modality in particular helps disentangle certain key representations leading to representations 
                            that conforms more towards certain causal variables.</em></li>
                        <li><em>The Multimodal contrastive training regime is learning a weak form of casualty that can be empirically 
                            observed by altering the expected text classifications.</em></li>
                        <li><em>Are we able to extend the current theoretic framework for causal representation learning 
                            into the multimodal setting.</em></li>
                        </ul>
                    </ul>
                    <h5>Brief Introduction to Causal Representation Learning</h5>
                    </p>
                    </div>
                </Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Media><Media>
                            <Media object src={Representation} style={{maxHeight: 700, maxWidth: 700, marginRight: "1rem"}} alt="BadgerBot" id="HeadImg"/>
                        </Media></Media>
                    </Col>                
                    <Col></Col>
                </Row>
                <Container style={{marginTop: "2rem", marginBottom: "4rem"}}>
                    <div>
                    <p>
                    <ul>
                    Given a series of samples (X,Y) ~ Pxy where X ∈ R^d, the goal of representation learning is to learn an function f which can estimate
                    f(X) ∈ R^k where k&#60;&#60;d and ∃g:R^k -&#62; R^d s.t. g(f(X)) = f(X). In otherwords, we want to be able to reduce a high dimensional
                    sample (image) down to a low dimensional vector that still is able to fully represent the uniqueness of the sample (image).
                    </ul>
                    <ul>
                    However, in the Causal Representation Learning domain, we assume that there exists some ground truth 'factors' which can fully denote
                    the given sample image. Specifically, these ground truth 'factors' are random variables that, when a specific factor altered, can have
                    a causal effect (treatment effect) to the underly image.
                    </ul>
                    </p>
                    </div>
                </Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Media><Media>
                            <Media object src={BlackCat} style={{maxHeight: 700, maxWidth: 700, marginRight: "1rem"}} alt="BadgerBot" id="HeadImg"/>
                        </Media></Media>
                    </Col>                
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Media><Media>
                            <Media object src={BrownCat} style={{maxHeight: 700, maxWidth: 700, marginRight: "1rem"}} alt="BadgerBot" id="HeadImg"/>
                        </Media></Media>
                    </Col>                
                    <Col></Col>
                </Row>
                <Container style={{marginTop: "2rem", marginBottom: "4rem"}}>
                    <div>
                    <p>
                    <ul>
                    Therefore, the setup of our problem is that each element of our representation vector should represent a causal variable,
                    and that we should be able to empircally evaluate the alterations to each variable will correspond to a specific visual
                    feature.
                    </ul>
                    <ul>
                    Our goal with Causal Representation Learning is to be able to ingrain this causality inside the model, allowing the casusal
                    treatments to propagate to the representation of the model from the ground truth.
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
 
export default Project;