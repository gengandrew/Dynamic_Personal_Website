import React, { Component } from 'react';
import { Media, Card, CardBody, CardHeader, CardText, CardTitle, Row, Col } from 'reactstrap';
import Portrait from "../images/Andrew.jpg";
import Resume from "../documents/Website Resume.pdf"

class Headshot extends Component {
    imagestyle = {
        maxHeight: 350,
        maxWidth: 350,
        marginLeft: "-100px"
    }
    render() { 
        return (
            <Row>
            <Media id="HomeHeaderLarge">
                <Media left href="#">
                    <Media object src={Portrait} alt="placeHolder" style={this.imagestyle} />
                </Media>
                <Media body style={{marginLeft: "10px", marginTop: "10px", width: "100%"}}>
                    <Media heading>
                        Andrew Geng
                    </Media>
                    <Media>
                        <strong>Email:</strong> 
                        <a className="noLine" style={{marginLeft: "5px"}}>ageng@wisc.edu</a>
                    </Media>
                    <Media>
                        <strong>Phone:</strong> 
                        <div style={{marginLeft: "5px"}}>(608)999-0795</div>
                    </Media>
                    <Media>
                        <strong>Office:</strong> 
                        <div style={{marginLeft: "5px"}}>401 Charmany Dr Madison, WI 53719</div>
                    </Media>
                    <Media>
                        <strong>Website:</strong> 
                        <a className="underLine" href="https://pages.cs.wisc.edu/~ageng/" style={{marginLeft: "5px"}}>pages.cs.wisc.edu/~ageng</a>
                    </Media>
                    <Media>
                        <b>
                            <a className="underLine" href="https://github.com/gengandrew">Github</a> | 
                            <a className="underLine" href={Resume}> Resume</a> | 
                            <a className="underLine" href="https://www.linkedin.com/in/andrew-geng/"> Linkedin</a>
                        </b>
                    </Media>
                </Media>
            </Media>
            <Col id="HomeHeaderSmall"></Col>
            <Col id="HomeHeaderSmall">
                <Card id="HomeHeaderSmall">
                    <Media left href="#" style={{margin: "auto"}}>
                        <Media object src={Portrait} alt="placeHolder" style={{maxHeight: 350, maxWidth: 350}} />
                    </Media>
                    {/* <CardBody > */}
                        <Media left style={{margin: "auto"}}>
                        <Media heading style={{marginLeft: "10px", marginTop: "10px", width: "100%"}}>
                            Andrew Geng
                        </Media>
                        <Media style={{marginLeft: "10px", width: "100%"}}>
                            <strong>Email:</strong> 
                            <a className="noLine" style={{marginLeft: "5px"}}>ageng@wisc.edu</a>
                        </Media>
                        <Media style={{marginLeft: "10px", width: "100%"}}>
                            <strong>Phone:</strong> 
                            <div style={{marginLeft: "5px"}}>(608)999-0795</div>
                        </Media>
                        <Media style={{marginLeft: "10px", width: "100%"}}>
                            <strong>Address:</strong> 
                            <div style={{marginLeft: "5px"}}>630 Samuel Dr. Madison, WI 53717</div>
                        </Media>
                        <Media style={{marginLeft: "10px", width: "100%"}}>
                            <strong>Website:</strong> 
                            <a className="underLine" href="https://pages.cs.wisc.edu/~ageng/" style={{marginLeft: "5px"}}>pages.cs.wisc.edu/~ageng</a>
                        </Media>
                        <Media style={{marginLeft: "10px", width: "100%"}}>
                            <b>
                                <a className="underLine" href="https://github.com/gengandrew">Github</a> | 
                                <a className="underLine" href={Resume}> Resume</a> | 
                                <a className="underLine" href="https://www.linkedin.com/in/andrew-geng/"> Linkedin</a>
                            </b>
                        </Media>
                        </Media>
                    {/* </CardBody> */}
                </Card>
            </Col>
            <Col id="HomeHeaderSmall"></Col>
            </Row>
         );
    }
}
 
export default Headshot;