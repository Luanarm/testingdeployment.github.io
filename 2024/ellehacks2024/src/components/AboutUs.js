
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/aboutUs/ElleHacks2024-01.jpg';
import img2 from '../assets/aboutUs/ElleHacks2024-02.jpg';
import img3 from '../assets/aboutUs/ElleHacks2024-03.jpg';
import img4 from '../assets/aboutUs/ElleHacks2024-04.jpg';
import img5 from '../assets/aboutUs/ElleHacks2024-05.jpg';
import img6 from '../assets/aboutUs/ElleHacks2024-06.jpg';
import img7 from '../assets/aboutUs/ElleHacks2024-07.jpg';
import img8 from '../assets/aboutUs/ElleHacks2024-08.jpg';
import img9 from '../assets/aboutUs/ElleHacks2024-09.jpg';
import img10 from '../assets/aboutUs/ElleHacks2024-10.jpg';
import img11 from '../assets/aboutUs/ElleHacks2024-11.jpg';
class AboutUs extends Component {
  render() {
    return (
      <div id="aboutus" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '5vh'}}>
            <div style={{ flex: 1, minWidth: 300 }}>
            <Carousel>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img1} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img2} />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block mx-auto" width={500} height={600} alt="First slide" src={img3} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img4} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img5} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img6} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img7} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img8} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img9} />
                </Carousel.Item>
                <Carousel.Item>
                <Image  className="d-block mx-auto" width={500} height={600} alt="First slide" src={img10} />
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block mx-auto" width={500} height={600} alt="First slide" src={img11} />
                </Carousel.Item>
            </Carousel>
            </div>

            <div style={{ color: 'white', padding: '20px', textAlign: 'left', flex: 1, maxWidth: '800px', alignContent: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>About Us</h1>
                <br />
                <h5 style={{ textAlign: 'center' }}>Girls who // CODE write the future</h5>
                <br />
                <p> 
                Welcome to ElleHacks, where innovation meets inclusivity! 🚀
                <br/><br/> ElleHacks is one of Canada's largest hackathons for women and gender-diverse students and we want to celebrate your creativity! 

                <br/><br/> We're a free, student-run, and beginner-friendly competition serving as 
                your canvas to pitch bold solutions to global challenges, participate in engaging workshops, 
                and connect with a diverse community of recruiters, industry professionals and peers.
                <br/><br/>
                No coding experience? No problem! ElleHacks is designed for everyone, from tech enthusiasts
                to those taking their first steps in the digital world. 
                </p>
            </div>
      </div>
    );
  }
}


export default AboutUs;