import React, { Component } from 'react';
import { Media, Row } from 'reactstrap';
import Portrait from "../images/Andrew.jpg";

class Headshot extends Component {
    imagestyle = {
        maxHeight: 350,
        maxWidth: 350,
        marginLeft: "-100px"
    }
    render() { 
        return ( 
            <Media>
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
                        <strong>Address:</strong> 
                        <div style={{marginLeft: "5px"}}>630 Samuel Dr. Madison, WI 53717</div>
                    </Media>
                    <Media>
                        <strong>Website:</strong> 
                        <a className="underLine" href="https://pages.cs.wisc.edu/~ageng/" style={{marginLeft: "5px"}}>pages.cs.wisc.edu/~ageng</a>
                    </Media>
                    <Media>
                        <b>
                            <a className="underLine" href="https://github.com/gengandrew">Github</a> | 
                            <a className="underLine" href="~/../documents/Resume.pdf"> Resume</a> | 
                            <a className="underLine" href="https://www.linkedin.com/in/andrew-geng-b7a337135/"> Linkedin</a>
                        </b>
                    </Media>
                </Media>
            </Media>
         );
    }
}
 
export default Headshot;