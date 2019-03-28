import React, { Component } from 'react';
import SurveyInLine from "./InsertDBModal_Inline";
import DogModal from "./DogModal_Inline";

class About extends Component {
    render() { 
        return (
            <div>
            <p style={{marginTop: "2rem"}}>
                Hello there and welcome to my personal webpage!
                My name is Andrew Geng and I am an undergraduate at the <a className="underLine" href="https://www.wisc.edu/">University of Wisconsin-Madison </a> 
                studying <a className="underLine" href="https://www.cs.wisc.edu/">Computer Science </a> and <a className="underLine" href="https://www.engr.wisc.edu/">Computer Engineering</a>.
                I am an incoming Software Intern for <a className="underLine" href="https://www.ibm.com/us-en/?ar=1">IBM </a> in <a className="underLine" href="#">San Jose, California</a> and 
                currently I'm working part time for the <a className="underLine" href="https://it.wisc.edu/">UW Division of Information Technology</a> in the <a className="underLine" href="https://it.wisc.edu/about/division-of-information-technology/cybersecurity/">Office of Cybersecurity</a> as 
                a Cybersecurity Intern.
            </p>
            <p>
                If you wouldn't mind taking this <SurveyInLine /> so that I can learn more about you that would be wonderful.
                In the meantime please feel free to browse through my webpage or simply see some <DogModal text="cute doggos"/> I found online.
            </p>
            </div> 
         );
    }
}
 
export default About;