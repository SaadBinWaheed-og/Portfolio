import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Saad Bin Waheed </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            I am currently employed as a software developer at Mosaik.io.
            <br />           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> MOBA Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Passionately play and follow Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Hobbyist Table Tennis player
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
