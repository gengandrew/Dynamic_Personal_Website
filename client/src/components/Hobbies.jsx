import React, { Component } from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import InsertDBModal from "./InsertDBModal";
import MMM_Research from "../images/MMM.jpg";

class Hobbies extends Component {
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
                        <div style={{float: "right", fontSize: "11px", fontStyle: "italic"}} id="HeadImg_Link">
                            - Check out some cool Music, Mind, and Machine Research <a className="underLine" href="https://www.media.mit.edu/groups/music-mind-and-machine/overview/">here</a>, <a className="underLine" href="http://trim.mtu.edu/">here</a>, and <a className="underLine" href="https://www.springer.com/us/book/9783540585282">here</a>.
                        </div>
                        </Col>                
                    <Col></Col>
                </Row>
                <Container>
                    <div style={{marginTop: "1rem"}}>
                    <h3>Hobbies and Intrestes</h3>
                    <p>
                        <ul>
                           Reading has always been a favorite past time of mine; I will digest anything ranging from fantasy and science fiction to bibliographies and alternative history. 
                           Some of my must reads include: any and all of Brandon Sanderson's novels, but especially the <strong><a className="underLine" href="https://www.amazon.com/gp/product/B003P2WO5E/ref=series_dp_rw_ca_1">Stormlight Archive</a></strong> series,
                           Patrick Rothfuss' <strong><a className="underLine" href="https://www.amazon.com/gp/product/B0010SKUYM/ref=series_dp_rw_ca_1">Kingkiller Chronicle</a></strong>, and Walter Isaacson’s <strong><a className="underLine" href="https://www.amazon.com/Leonardo-Vinci-Walter-Isaacson/dp/1501139150">Leonardo da Vinci</a></strong> bibliography.
                        </ul>
                        <ul>
                            Music has also played a significant role in my daily life, with myself playing the trumpet and piano throughout the majority of my childhood. 
                            It is also a life long goal of mine to live and experience life in as many countries as possible. I hope to someday get to visit South America, specifically Peru, whenever I get the opportunity to do so.         
                        </ul>
                        <ul>
                            If you or your friends are interested in a good laugh at terrible writing, my Medium profile is <strong><a className="underLine" href="https://medium.com/@ageng">here</a></strong> with every sort of terrible writing imaginable.
                        </ul>
                        <ul>
                            Otherwise if your interested in being hungary, you can follow my traveling adventures <strong><a className="underLine" href="https://www.instagram.com/feastingwithandre/">here</a></strong> which chronicles my attempts to gain enough weight to eventually self collapse into a black hole.
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
 
export default Hobbies;