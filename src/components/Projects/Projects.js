import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.png';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import suicide from '../../Assets/Projects/suicide.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Mosaik.io'
              description='A React Native app that serves as a comprehensive operating platform for real estate agents and their clients. It features advanced property management tools, client engagement solutions, and seamless integrations to streamline operations on both iOS and Android.'
              iosLink='https://apps.apple.com/pk/app/mosaik-io/id1579517790'
              androidLink='https://play.google.com/store/apps/details?id=com.mosaik.app&hl=en'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='ReBorn Mobile Application'
              description='A PropTech mobile application developed for the Canadian property market. It enables users to browse properties, receive real-time alerts, and connect with agents. Built with React Native, it provides a smooth user experience for both Android and iOS.'
              iosLink={null} // No iOS link provided
              androidLink='https://play.google.com/store/apps/details?id=com.reborn_app&hl=en'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='Propforce Affiliates'
              description='A revamped affiliate management app designed for affiliate sales agents. Features include enhanced performance, Firebase-based real-time messaging, and tools to streamline sales activities. Developed with React Native for both iOS and Android platforms.'
              iosLink='https://apps.apple.com/pk/app/propforce-affiliates/id1499787050'
              androidLink='https://play.google.com/store/apps/details?id=com.zameen.propforce&hl=en'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='ActiveBA Mobile App'
              description='A salesforce management app tailored for marketing agents. This app integrates tools for agent tracking, task management, and internal communications, ensuring efficiency and productivity.'
              iosLink={null} // No iOS link provided
              androidLink={null} // No Android link provided
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
