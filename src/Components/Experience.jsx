import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa"; 
import "./Experience.css"; 
const Experience = () => {
  const ownWork = [
    {
  name: "Tata Ride Website",
  description: "Tata Ride is a professional taxi booking frontend website built with React, CSS, and Bootstrap, fully responsive and user-friendly.",
  workDays: "2 Days",
  viewLink: "https://ta-ta-ride.vercel.app/", 
},
     {
      name: "Currency Converter",
      description: "A collaborative CRM tool for sales and marketing.",
      workDays: "30 Days",
      viewLink: "https://currency-converter-3.vercel.app/",
    }, {
        name: "Quiz App",
        description: "A C++ language quiz  application where  users can  test  their  knowledge and  potential  earn rewards by participating.",
       workDays:"12 Days",
       viewLink:"https://quiz-ecru-nu.vercel.app/",

      },
      {
  name: "Weather App",
  description: "A real-time weather web application that detects the user's location automatically and shows live weather updates with a professional UI, animated icons, and city-based search functionality.",
  workDays: " 2 Days",
  viewLink: "https://weather-orpin-seven.vercel.app/",
},  {

      name: "Portfolio Website",
      description: "A professional portfolio showcasing skills and projects.",
      workDays: "15 Days",
      viewLink: "https://metro.up.railway.app/",
    }, {
      name: "Blog Platform",
      description: "A dynamic platform for creating and managing blogs.",
      workDays: "18 Days",
      viewLink: "https://github.com/shahabdad/BlogApp",
    },
     {
      name: "Tic-Tac-Toe Deluxe", 
      description: "A sleek and modern Tic-Tac-Toe game with dark mode, interactive animations, and a fully responsive design for all devices.", 
      workDays: "3-5 days", 
      viewLink: "https://game-dad.vercel.app/"
    },
        {
      name: "Urlshortner Platform",
      description: "URL Platform is a simple and efficient web application for event planning and coordination, helping users manage events and schedules with ease.",
      workDays: "1 Days",
      viewLink: "https://url-shortner-v7hh.vercel.app/",
    },
    {
  name: "Tic Tac Toe Game",
  description: "Tic Tac Toe is a classic two-player game built using React. This interactive web app allows players to take turns marking X and O on a 3x3 grid with real-time winner detection and reset functionality.",
  workDays: "1 Day",
  viewLink: "https://game-dad.vercel.app/", 
},
    {
  name: "Scientific Calculator",
  description: "Scientific Calculator is a responsive and interactive web tool that allows users to perform basic and advanced mathematical calculations with a clean UI, built using React and CSS.",
  workDays: "1 Day",
  viewLink: "scientific-calculator-beta-beige.vercel.app", 
}
  
  ];
    const teamWork = [
      {
      name: "E-Commerce Website",
      description: "A responsive online store for multiple categories.",
      workDays: "20 Days",
      viewLink: "https://homazing.pk/?srsltid=AfmBOooutOs9at2e4lyC4SFFsMdGvDhEZ9tEgwpi6xqEco_5Ti60bsz1",
    },
   

      {
        name: "Collaborative Learning App",
        description: "A platform for shared learning experiences.",
        workDays: "Continue",
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
