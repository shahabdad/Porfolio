import React from "react";
import "./OwnProjects.css";

const OwnProjects = () => {
  const projects = [
    {
      name: "E-Commerce Website",
      description: "A responsive online store for multiple categories.",
      workDays: "20 Days",
      viewLink: "#",
    },
    {
      name: "Portfolio Website",
      description: "A professional portfolio showcasing skills and projects.",
      workDays: "15 Days",
      viewLink: "#",
    },
    {
      name: "Blog Platform",
      description: "A dynamic platform for creating and managing blogs.",
      workDays: "18 Days",
      viewLink: "#",
    },
    {
      name: "Weather App",
      description: "An application showing real-time weather updates.",
      workDays: "10 Days",
      viewLink: "#",
    },
    {
      name: "Task Management App",
      description: "A productivity tool for managing daily tasks.",
      workDays: "12 Days",
      viewLink: "#",
    },
    {
      name: "Chat Application",
      description: "A real-time chat app using WebSockets.",
      workDays: "25 Days",
      viewLink: "#",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Own Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-days">Work Days: {project.workDays}</p>
            <a href={project.viewLink} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnProjects;
