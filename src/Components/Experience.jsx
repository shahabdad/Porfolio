import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa"; 
import "./Experience.css"; 
const Experience = () => {
  const ownWork = [
    {
      name: "E-Commerce Website",
      description: "A responsive online store for multiple categories.",
      workDays: "20 Days",
      viewLink: "#",
    },  {
      name: "Portfolio Website",
      description: "A professional portfolio showcasing skills and projects.",
      workDays: "15 Days",
      viewLink: "#",
    }, {
      name: "Blog Platform",
      description: "A dynamic platform for creating and managing blogs.",
      workDays: "18 Days",
      viewLink: "#",
    },
  ];
    const teamWork = [
    {
      name: "Team CRM System",
      description: "A collaborative CRM tool for sales and marketing.",
      workDays: "30 Days",
      viewLink: "https://currency-converter-3.vercel.app/",
    },
    {
      name: "Event Management Platform",
      description: "An application for event planning and coordination.",
      workDays: "28 Days",
      viewLink: "https://currency-converter-3.vercel.app/",
    },
    {
      name: "Collaborative Learning App",
      description: "A platform for shared learning experiences.",
      workDays: "25 Days",
      viewLink: "#",
    },
  ];
    const renderCards = (projects) =>
    projects.map((project, index) => (
      <Col key={index} md={6} lg={4} className="mb-4">
        <Card className="experience-card">
          <Card.Body>
            <Card.Title className="card-title">{project.name}</Card.Title>
            <Card.Text className="card-text">{project.description}</Card.Text>
            <Card.Text className="card-days">
              <strong>Work Days:</strong> {project.workDays}
            </Card.Text>
            <a href={project.viewLink} className="btn btn-primary view-link">
              View Project <FaExternalLinkAlt />
            </a>
          </Card.Body>
        </Card>
      </Col>
    ));
return (
    <Container className="experience-section">
      <h2 className="section-title">Experience</h2>
      <h3 className="subsection-title">Own Work</h3>
      <Row>{renderCards(ownWork)}</Row>
      <h3 className="subsection-title">Team Work</h3>
      <Row>{renderCards(teamWork)}</Row>
    </Container>
  );
};
export default Experience;
