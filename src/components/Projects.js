import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import passwordImg from '../assets/img/password.png';
import TinDogImg from '../assets/img/TinDog.png';
import DicEchallengeImg from '../assets/img/thisdice.png';
import responsiveWebsiteImg from '../assets/img/responsiveWebsite.png';
import socialImg from '../assets/img/social.png';
import DrumkitImg from '../assets/img/drumkit 2.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import doctalkImg from '../assets/img/doctalk.png';
import natoursImg from '../assets/img/natours.png';
import pharmacyImg from '../assets/img/pharmacy.png';
import madhyasthImg from '../assets/img/madhyasth.png';
import notesImg from '../assets/img/notes.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: 'DocTalk',
      description: 'Design & Development',
      imgUrl: doctalkImg,
      link: 'https://vaibhav2536.github.io/Doctalk_Main_Frontend/'
    },
    {
      title: 'Natours',
      description: 'Design & Development',
      imgUrl: natoursImg,
      link: 'https://natours-jzik.onrender.com'
    },
    {
      title: 'Social Media Web App',
      description: 'Design & Development',
      imgUrl: socialImg,
      link: 'https://vaibhav2536.github.io/social-media-web-app/'
    },
    {
      title: 'Pharmacy',
      description: 'Design & Development',
      imgUrl: pharmacyImg,
      link: 'https://pharmacy-ml-1.onrender.com'
    },
    {
      title: 'Notes Maker',
      description: 'Design & Development',
      imgUrl: notesImg,
      link: 'https://vaibhav2536.github.io/Notes-App/'
    },
    {
      title: 'Password Generator',
      description: 'Design & Development',
      imgUrl: passwordImg,
      link: 'https://vaibhav2536.github.io/Password-Generator/'
    },
    {
      title: 'Madhyasth',
      description: 'Design & Development',
      imgUrl: madhyasthImg,
      link: 'https://github.com/vaibhav2536/Madhyasth'
    },
    {
      title: 'Dice challenge',
      description: 'Design & Development',
      imgUrl: DicEchallengeImg,
      link: 'https://vaibhav2536.github.io/dice-game/'
    },
    {
      title: 'Drum Kit',
      description: 'Design & Development',
      imgUrl: DrumkitImg,
      link: 'https://vaibhav2536.github.io/Drumkit/'
    },
    {
      title: 'TinDog',
      description: 'Design & Development',
      imgUrl: TinDogImg,
      link: 'https://vaibhav2536.github.io/TinDog/'
    },
    {
      title: 'Responsive Website',
      description: 'Design & Development',
      imgUrl: responsiveWebsiteImg,
      link: 'https://vaibhav2536.github.io/responsive-website/'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>Here are the various projects I have been developing using various tools and technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Waiting for more projects!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Always ready to collaborate.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
