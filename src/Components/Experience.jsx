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
      viewLink: "https://homazing.pk/?srsltid=AfmBOooutOs9at2e4lyC4SFFsMdGvDhEZ9tEgwpi6xqEco_5Ti60bsz1",
    },  {
      name: "Portfolio Website",
      description: "A professional portfolio showcasing skills and projects.",
      workDays: "15 Days",
      viewLink: "https://metro.up.railway.app/",
    }, {
      name: "Blog Platform",
      description: "A dynamic platform for creating and managing blogs.",
      workDays: "18 Days",
      viewLink: "#",
    },
  ];
    const teamWork = [
    {
      name: "Currency Converter",
      description: "A collaborative CRM tool for sales and marketing.",
      workDays: "30 Days",
      viewLink: "https://currency-converter-3.vercel.app/",
    },
    {
      name: "Urlshortner Platform",
      description: "URL Platform is a simple and efficient web application for event planning and coordination, helping users manage events and schedules with ease.",
      workDays: "1 Days",
      viewLink: "https://url-shortner-v7hh.vercel.app/",
    },
      {
        name: "Collaborative Learning App",
        description: "A platform for shared learning experiences.",
        workDays: "25 Days",
        viewLink: "#",
      },
    {
      name: "Tic-Tac-Toe Deluxe", 
      description: "A sleek and modern Tic-Tac-Toe game with dark mode, interactive animations, and a fully responsive design for all devices.", 
      workDays: "3-5 days", 
      viewLink: "https://game-dad.vercel.app/"
    }
    
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
