import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiAndroid, SiIos } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>
        <div style={{ marginTop: "auto", display: "flex", gap: "10px", justifyContent: "center", paddingTop: "10px" }}>
          <Button variant="primary" href={props.androidLink} target="_blank">
            <SiAndroid /> &nbsp; Android
          </Button>
          <Button variant="primary" href={props.iosLink} target="_blank">
            <SiIos /> &nbsp; iOS
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
