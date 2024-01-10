
// JoinUs.js
import React, { Component } from 'react';
import Yellow from "../assets/Yellow.png";
import Red from "../assets/Red.png";
import Green from "../assets/Green.png";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class JoinUS extends Component {
  render() {
    const mentor = {
      color: '#FFF',
      backgroundColor: '#FFCE82',
      fontSize: '2vw',
      fontWeight: 500,
      lineHeight: 'normal',
      textDecoration: 'none',
      border: '1px',
    };

    const hacker = {
      color: '#FFF',
      backgroundColor: '#A45555',
      fontSize: '2vw',
      fontWeight: 500,
      lineHeight: 'normal',
      textDecoration: 'none',
      border: '1px',
    };

    const volunteer = {
      color: '#FFF',
      backgroundColor: '#B0BBA0',
      fontSize: '2vw',
      fontWeight: 500,
      lineHeight: 'normal',
      textDecoration: 'none',
      border: '1px',
    };

    const joinUsStyle = {
      padding: '20px',
      paddingLeft: '12px',
      paddingRight: '36px',
      paddingBottom: '8px',
      fontWeight: 'bold',
      fontSize: '4xl',
      color: 'white',
      backgroundColor: '#712323',
     
    };

    const cardStyleHacker = {
        width: '15rem',
        border: '0',
        maxWidth: '100%', 
        width: '100%',
        backgroundColor: '#712323',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Align items at the center
        textAlign: 'center', // Center text horizontally
      };
      
      const cardStyleMentor = {
        paddingTop: '120px',
        border: '0',
        width: '15rem',
        maxWidth: '100%', 
        width: '100%',
        backgroundColor: '#712323',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Align items at the center
        textAlign: 'center', // Center text horizontally
      };
      
      const cardStyleVolunteer = {
        paddingTop: '100px',
        border: '0',
        width: '15rem',
        maxWidth: '100%', 
        width: '100%',
        backgroundColor: '#712323',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Align items at the center
        textAlign: 'center', // Center text horizontally
      };

    return (
      <>
        {/* Join Us Section */}
        <div id="joinus" style={joinUsStyle}>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-left font-bold">Join Us</h1>

          {/* Main Content Grid */}
          <div className="container">
            <CardGroup className="text-center">
              <Card style={cardStyleMentor}>
                <Card.Img
                  variant="top"
                  src={Yellow}
                  alt="Mentor Image"
                  className="w-50 h-40 rounded-md object-contain mx-auto"
                />
                <Card.Body>
                  <Card.Title>Mentor</Card.Title>
                  <Card.Text>
                  Do you have knowledgable information about tech and are eager to teach?
                  </Card.Text>
                  <Button variant="link" style={mentor}>Become a Mentor</Button>
                </Card.Body>
              </Card>

              <Card style={cardStyleHacker}>
                <Card.Img
                  variant="top"
                  src={Red}
                  alt="Hacker Image"
                  className="w-80  h-auto rounded-md object-contain mx-auto"
                />
                <Card.Body className="flex flex-col justify-between">
                    <Card.Title>Hacker</Card.Title>
                    <Card.Text>
                      Come out and join us for ElleHacks 2024
                    </Card.Text>
                  <Button variant="link" href="https://docs.google.com/forms/d/e/1FAIpQLScgC8tMJAb8RJmOTAdPYisk_pyDoVxosDGI7Bqq51Dr4AhnCQ/viewform?pli=1" style={hacker}>Become a Hacker</Button>
                </Card.Body>
              </Card>

              <Card style={cardStyleVolunteer}>
                <Card.Img
                  variant="top"
                  src={Green}
                  alt="Volunteer Image"
                  className="w-50 h-40 rounded-md object-contain mx-auto"
                />
                <Card.Body>
                  <Card.Title>Volunteer</Card.Title>
                  <Card.Text>
                  Want to help out? Apply here and we'll set you up with a task!
                  </Card.Text>
                  <Button variant="link" style={volunteer}>Become a Volunteer</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </>
    );
  }
}

export default JoinUS;

