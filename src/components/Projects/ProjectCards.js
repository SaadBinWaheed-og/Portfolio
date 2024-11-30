import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsAndroid, BsGithub } from "react-icons/bs";
import { SiAndroid, SiIos } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.androidLink} target="_blank">
          <SiAndroid /> &nbsp;
          {'Android'}
        </Button>
        {"\n"}
        {"\n"}
        <Button variant="primary" href={props.iosLink} target="_blank">
          <SiIos /> &nbsp;
          {'iOS'}
        </Button>
       
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
