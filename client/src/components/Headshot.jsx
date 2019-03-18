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
                <Media body style={{marginLeft: "10px", marginTop: "10px", width: "200px"}}>
                    <Media heading>
                        Andrew Geng
                    </Media>
                    <Media>
                        <strong>Email:</strong> 
                        <a href="#" style={{marginLeft: "5px"}}>ageng@wisc.edu</a>
                    </Media>
                    <Media>Hello World</Media>
                    <Media>Hello World</Media>
                </Media>
            </Media>
         );
    }
}
 
export default Headshot;