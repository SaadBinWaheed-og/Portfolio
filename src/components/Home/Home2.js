import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/saad-avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I fell in love with programming, and over the years, I've
              specialized in creating impactful mobile applications.
              <br />
              <br />I am fluent in modern technologies like
              <i>
                <b className='purple'>
                  {' '}
                  JavaScript, TypeScript, and React Native.{' '}
                </b>
              </i>
              <br />
              <br />
              My fields of interest include building &nbsp;
              <i>
                <b className='purple'>
                  scalable and user-friendly mobile applications
                </b>{' '}
                and integrating <b className='purple'>AI features</b>, while
                optimizing performance for seamless user experiences.
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into developing mobile
              solutions using <b className='purple'>React Native</b> and
              <i>
                <b className='purple'>
                  {' '}
                  modern tools like Firebase and app deployment platforms.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/SaadBinWaheed-og'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://linkedin.com/in/saadwaheed-neurostic'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
