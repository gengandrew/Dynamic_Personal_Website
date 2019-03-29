import React, { Component } from "react";
import {Container, Row, Col, Media} from "reactstrap";
import SadDog from "../images/sadDog.jpg"

class ErrorPage extends Component {
  ReloadWindow = e => {
    window.location.assign(e.target.name);
    setTimeout(function () {
      window.location.reload();
    }, 8);
  }
  render() {
    return (
      <Container style={{paddingTop: "2rem"}}>
        <Row>
          <Col xs="1"></Col>
          <Col><h1 style={{textAlign: "center"}}>Sorry, we weren't able to find that page.</h1></Col>
          <Col xs="1"></Col>
        </Row>
        <Row>
          <Col xs="1"></Col>
          <Col><div style={{textAlign: "center", fontSize: "18px"}}>Click <a className="underLine" onClick={this.ReloadWindow} name="/~ageng/#/">here</a> to go back to the homepage.</div></Col>
          <Col xs="1"></Col>
        </Row>
        <Row>
        <Col xs="1"></Col>
          <Col>
            <Media>
              <Media object src={SadDog} alt="SadDog" style={{width: "90%", height: "90%", marginTop: "1rem"}} />
            </Media>
          </Col>
          <Col xs="1"></Col>
        </Row>
      </Container>
    )
  }
}

export default ErrorPage;
