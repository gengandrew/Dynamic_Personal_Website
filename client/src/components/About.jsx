import React, { Component } from 'react';

class About extends Component {
    render() { 
        return (
            <div>
            <p style={{marginTop: "2rem"}}>
                Hello there and welcome to my personal webpage!
                My name is Andrew Geng and I am an undergraduate at the <a className="underLine">University of Wisconsin-Madison </a> 
                studying <a className="underLine">Computer Science </a> and <a className="underLine">Computer Engineering</a>.
                I am an incoming Software Intern for <a className="underLine">IBM </a> in <a className="underLine">San Jose, California</a> and 
                currently I'm working part time for the <a className="underLine">UW Division of Information Technology</a> in the <a className="underLine">Office of Cybersecurity</a> as 
                a Cybersecurity Intern.
            </p>
            <p>
                If you wouldn't mind taking this <a className="underLine">survey</a> so that I can learn more about you that would be wonderful.
                In the mean time please feel free to browse through my webapge or simply see some <a className="underLine">cute doggos</a> I found online.
            </p>
            </div> 
         );
    }
}
 
export default About;