// // // // // // // // // src/components/Contact.js
// // // // // // // // import React from 'react';

// // // // // // // // const Contact = () => {
// // // // // // // //   return (
// // // // // // // //     <div id="contact" className="text-light py-5" style={{ background: 'black' }}>
// // // // // // // //       <div className="container">
// // // // // // // //         <h2>Contact</h2>
// // // // // // // //         <p>Phone: 03 191796621</p>
// // // // // // // //         <p>
// // // // // // // //           GitHub: <a href="https://github.com/shahabdad" className="text-info">https://github.com/shahabdad</a>
// // // // // // // //         </p>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Contact;
// // // // // // // import React, { useState } from "react";
// // // // // // // import { Form, Button, Container, Row, Col } from "react-bootstrap";
// // // // // // // import { FaUserAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
// // // // // // // import "./Contact.css";

// // // // // // // const Contact = () => {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: "",
// // // // // // //     email: "",
// // // // // // //     phone: "",
// // // // // // //     message: "",
// // // // // // //   });

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // // // //   };

// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     // Sending message via email
// // // // // // //     const emailBody = `
// // // // // // //       Name: ${formData.name}%0A
// // // // // // //       Email: ${formData.email}%0A
// // // // // // //       Phone: ${formData.phone}%0A
// // // // // // //       Message: ${formData.message}
// // // // // // //     `;
// // // // // // //     window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="contact-container">
// // // // // // //       <Container>
// // // // // // //         <Row>
// // // // // // //           {/* Left Side - Intro and Links */}
// // // // // // //           <Col lg={6} className="contact-info">
// // // // // // //             <h2 className="contact-title">Let's Connect</h2>
// // // // // // //             <p className="contact-text">
// // // // // // //               I'm always excited to discuss new opportunities or hear your feedback! Reach out to me using the form or via the links below.
// // // // // // //             </p>
// // // // // // //             <div className="contact-icons">
// // // // // // //               <div className="rotating-icon">
// // // // // // //                 <FaUserAlt size={40} />
// // // // // // //               </div>
// // // // // // //               <div className="rotating-icon">
// // // // // // //                 <FaEnvelope size={40} />
// // // // // // //               </div>
// // // // // // //               <div className="rotating-icon">
// // // // // // //                 <FaPhone size={40} />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="contact-links">
// // // // // // //               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
// // // // // // //                 <FaLinkedin size={30} /> LinkedIn
// // // // // // //               </a>
// // // // // // //               <a href="https://github.com" target="_blank" rel="noopener noreferrer">
// // // // // // //                 <FaGithub size={30} /> GitHub
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </Col>

// // // // // // //           {/* Right Side - Form */}
// // // // // // //           <Col lg={6} className="contact-form">
// // // // // // //             <Form onSubmit={handleSubmit}>
// // // // // // //               <Form.Group className="mb-3" controlId="formName">
// // // // // // //                 <Form.Label>Your Name</Form.Label>
// // // // // // //                 <Form.Control
// // // // // // //                   type="text"
// // // // // // //                   name="name"
// // // // // // //                   value={formData.name}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   placeholder="Enter your name"
// // // // // // //                   required
// // // // // // //                 />
// // // // // // //               </Form.Group>

// // // // // // //               <Form.Group className="mb-3" controlId="formEmail">
// // // // // // //                 <Form.Label>Your Email</Form.Label>
// // // // // // //                 <Form.Control
// // // // // // //                   type="email"
// // // // // // //                   name="email"
// // // // // // //                   value={formData.email}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   placeholder="Enter your email"
// // // // // // //                   required
// // // // // // //                 />
// // // // // // //               </Form.Group>

// // // // // // //               <Form.Group className="mb-3" controlId="formPhone">
// // // // // // //                 <Form.Label>Your Phone</Form.Label>
// // // // // // //                 <Form.Control
// // // // // // //                   type="text"
// // // // // // //                   name="phone"
// // // // // // //                   value={formData.phone}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   placeholder="Enter your phone number"
// // // // // // //                 />
// // // // // // //               </Form.Group>

// // // // // // //               <Form.Group className="mb-3" controlId="formMessage">
// // // // // // //                 <Form.Label>Your Message</Form.Label>
// // // // // // //                 <Form.Control
// // // // // // //                   as="textarea"
// // // // // // //                   name="message"
// // // // // // //                   value={formData.message}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   rows={5}
// // // // // // //                   placeholder="Write your message here"
// // // // // // //                   required
// // // // // // //                 />
// // // // // // //               </Form.Group>

// // // // // // //               <Button variant="primary" type="submit" className="submit-button">
// // // // // // //                 Send Message
// // // // // // //               </Button>
// // // // // // //             </Form>
// // // // // // //           </Col>
// // // // // // //         </Row>
// // // // // // //       </Container>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Contact;


// // // // // // import React, { useState } from "react";
// // // // // // import "./Contact.css";

// // // // // // const Contact = () => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     email: "",
// // // // // //     phone: "",
// // // // // //     message: "",
// // // // // //   });

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();

// // // // // //     const emailBody = `
// // // // // //       Name: ${formData.name}%0A
// // // // // //       Email: ${formData.email}%0A
// // // // // //       Phone: ${formData.phone}%0A
// // // // // //       Message: ${formData.message}
// // // // // //     `;
// // // // // //     window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="contact-section" aria-labelledby="contact-heading">
// // // // // //       <div className="container">
// // // // // //         <header className="contact-header">
// // // // // //           <h1 id="contact-heading" className="contact-title">Contact Me</h1>
// // // // // //           <p className="contact-description">
// // // // // //             I'd love to hear from you! Fill out the form or reach out using the links below.
// // // // // //           </p>
// // // // // //         </header>

// // // // // //         <div className="contact-content">
// // // // // //           {/* Left Side - Contact Info */}
// // // // // //           <aside className="contact-info">
// // // // // //             <figure className="profile-image-wrapper">
// // // // // //               <img
// // // // // //                 src="https://via.placeholder.com/300"
// // // // // //                 alt="Profile"
// // // // // //                 className="profile-image"
// // // // // //               />
// // // // // //             </figure>
// // // // // //             <p>Feel free to connect with me:</p>
// // // // // //             <ul className="contact-links">
// // // // // //               <li>
// // // // // //                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
// // // // // //                   <span>LinkedIn</span>
// // // // // //                 </a>
// // // // // //               </li>
// // // // // //               <li>
// // // // // //                 <a href="https://github.com" target="_blank" rel="noopener noreferrer">
// // // // // //                   <span>GitHub</span>
// // // // // //                 </a>
// // // // // //               </li>
// // // // // //             </ul>
// // // // // //           </aside>

// // // // // //           {/* Right Side - Contact Form */}
// // // // // //           <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="form-heading">
// // // // // //             <h2 id="form-heading" className="form-title">Get in Touch</h2>

// // // // // //             <div className="form-group">
// // // // // //               <label htmlFor="name">Your Name</label>
// // // // // //               <input
// // // // // //                 id="name"
// // // // // //                 type="text"
// // // // // //                 name="name"
// // // // // //                 value={formData.name}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Enter your name"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             <div className="form-group">
// // // // // //               <label htmlFor="email">Your Email</label>
// // // // // //               <input
// // // // // //                 id="email"
// // // // // //                 type="email"
// // // // // //                 name="email"
// // // // // //                 value={formData.email}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Enter your email"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             <div className="form-group">
// // // // // //               <label htmlFor="phone">Your Phone</label>
// // // // // //               <input
// // // // // //                 id="phone"
// // // // // //                 type="text"
// // // // // //                 name="phone"
// // // // // //                 value={formData.phone}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Enter your phone number"
// // // // // //               />
// // // // // //             </div>

// // // // // //             <div className="form-group">
// // // // // //               <label htmlFor="message">Your Message</label>
// // // // // //               <textarea
// // // // // //                 id="message"
// // // // // //                 name="message"
// // // // // //                 value={formData.message}
// // // // // //                 onChange={handleChange}
// // // // // //                 rows="5"
// // // // // //                 placeholder="Write your message here"
// // // // // //                 required
// // // // // //               ></textarea>
// // // // // //             </div>

// // // // // //             <button type="submit" className="submit-button">
// // // // // //               Send Message
// // // // // //             </button>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Contact;


// // // // // import React, { useState, useEffect } from "react";
// // // // // import "./Contact.css";

// // // // // const Contact = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     phone: "",
// // // // //     message: "",
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();

// // // // //     const emailBody = `
// // // // //       Name: ${formData.name}%0A
// // // // //       Email: ${formData.email}%0A
// // // // //       Phone: ${formData.phone}%0A
// // // // //       Message: ${formData.message}
// // // // //     `;
// // // // //     window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     const image = document.querySelector(".profile-image");
// // // // //     const animation = image.animate(
// // // // //       [
// // // // //         { transform: "translateY(0px)" },
// // // // //         { transform: "translateY(-10px)" },
// // // // //         { transform: "translateY(0px)" },
// // // // //       ],
// // // // //       {
// // // // //         duration: 3000,
// // // // //         iterations: Infinity,
// // // // //       }
// // // // //     );

// // // // //     return () => animation.cancel();
// // // // //   }, []);

// // // // //   return (
// // // // //     <section className="contact-section" aria-labelledby="contact-heading">
// // // // //       <div className="container">
// // // // //         <header className="contact-header">
// // // // //           <h1 id="contact-heading" className="contact-title">Get in Touch</h1>
// // // // //           <p className="contact-description">
// // // // //             Feel free to reach out using the form or the links below!
// // // // //           </p>
// // // // //         </header>

// // // // //         <div className="contact-content">
// // // // //           {/* Left Side - Contact Info */}
// // // // //           <aside className="contact-info">
// // // // //             <div className="profile-image-wrapper">
// // // // //               <img
// // // // //                 src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg"
// // // // //                 alt="Profile"
// // // // //                 className="profile-image"
// // // // //               />
// // // // //             </div>
// // // // //             <ul className="contact-links">
// // // // //               <li>
// // // // //                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
// // // // //                   LinkedIn
// // // // //                 </a>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <a href="https://github.com" target="_blank" rel="noopener noreferrer">
// // // // //                   GitHub
// // // // //                 </a>
// // // // //               </li>
// // // // //             </ul>
// // // // //           </aside>

// // // // //           {/* Right Side - Contact Form */}
// // // // //           <form
// // // // //             className="contact-form"
// // // // //             onSubmit={handleSubmit}
// // // // //             aria-labelledby="form-heading"
// // // // //           >
// // // // //             <h2 id="form-heading" className="form-title">Send a Message</h2>

// // // // //             <div className="form-group">
// // // // //               <label htmlFor="name">Your Name</label>
// // // // //               <input
// // // // //                 id="name"
// // // // //                 type="text"
// // // // //                 name="name"
// // // // //                 value={formData.name}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your name"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="form-group">
// // // // //               <label htmlFor="email">Your Email</label>
// // // // //               <input
// // // // //                 id="email"
// // // // //                 type="email"
// // // // //                 name="email"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your email"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="form-group">
// // // // //               <label htmlFor="phone">Your Phone</label>
// // // // //               <input
// // // // //                 id="phone"
// // // // //                 type="text"
// // // // //                 name="phone"
// // // // //                 value={formData.phone}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your phone number"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="form-group">
// // // // //               <label htmlFor="message">Your Message</label>
// // // // //               <textarea
// // // // //                 id="message"
// // // // //                 name="message"
// // // // //                 value={formData.message}
// // // // //                 onChange={handleChange}
// // // // //                 rows="5"
// // // // //                 placeholder="Write your message here"
// // // // //                 required
// // // // //               ></textarea>
// // // // //             </div>

// // // // //             <button type="submit" className="submit-button">
// // // // //               Send Message
// // // // //             </button>
// // // // //           </form>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Contact;


// // // // import React, { useState, useEffect } from "react";
// // // // import "./Contact.css";

// // // // const Contact = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();

// // // //     const emailBody = `
// // // //       Name: ${formData.name}%0A
// // // //       Email: ${formData.email}%0A
// // // //       Phone: ${formData.phone}%0A
// // // //       Message: ${formData.message}
// // // //     `;
// // // //     window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
// // // //   };

// // // //   useEffect(() => {
// // // //     const image = document.querySelector("#profile-image");
// // // //     const animation = image.animate(
// // // //       [
// // // //         { transform: "translateY(0px)" },
// // // //         { transform: "translateY(-10px)" },
// // // //         { transform: "translateY(0px)" },
// // // //       ],
// // // //       {
// // // //         duration: 3000,
// // // //         iterations: Infinity,
// // // //       }
// // // //     );

// // // //     return () => animation.cancel();
// // // //   }, []);

// // // //   return (
// // // //     <section id="contact-section" aria-labelledby="contact-heading">
// // // //       <div className="container">
// // // //         <header id="contact-header">
// // // //           <h1 id="contact-heading">Get in Touch</h1>
// // // //           <p id="contact-description">
// // // //             Feel free to reach out using the form or the links below!
// // // //           </p>
// // // //         </header>

// // // //         <div id="contact-content">
// // // //           {/* Left Side - Contact Info */}
// // // //           <aside id="contact-info">
// // // //             <div id="profile-image-wrapper">
// // // //               <img
// // // //                 id="profile-image"
// // // //                 src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg"
// // // //                 alt="Profile"
// // // //               />
// // // //             </div>
// // // //             <ul id="contact-links">
// // // //               <li>
// // // //                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
// // // //                   LinkedIn
// // // //                 </a>
// // // //               </li>
// // // //               <li>
// // // //                 <a href="https://github.com" target="_blank" rel="noopener noreferrer">
// // // //                   GitHub
// // // //                 </a>
// // // //               </li>
// // // //             </ul>
// // // //           </aside>

// // // //           {/* Right Side - Contact Form */}
// // // //           <form id="contact-form" onSubmit={handleSubmit} aria-labelledby="form-heading">
// // // //             <h2 id="form-heading">Send a Message</h2>

// // // //             <div id="form-group">
// // // //               <label htmlFor="name">Your Name</label>
// // // //               <input
// // // //                 id="name"
// // // //                 type="text"
// // // //                 name="name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your name"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div id="form-group">
// // // //               <label htmlFor="email">Your Email</label>
// // // //               <input
// // // //                 id="email"
// // // //                 type="email"
// // // //                 name="email"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your email"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div id="form-group">
// // // //               <label htmlFor="phone">Your Phone</label>
// // // //               <input
// // // //                 id="phone"
// // // //                 type="text"
// // // //                 name="phone"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your phone number"
// // // //               />
// // // //             </div>

// // // //             <div id="form-group">
// // // //               <label htmlFor="message">Your Message</label>
// // // //               <textarea
// // // //                 id="message"
// // // //                 name="message"
// // // //                 value={formData.message}
// // // //                 onChange={handleChange}
// // // //                 rows="5"
// // // //                 placeholder="Write your message here"
// // // //                 required
// // // //               ></textarea>
// // // //             </div>

// // // //             <button type="submit" id="submit-button">
// // // //               Send Message
// // // //             </button>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Contact;


// // // import React, { useState, useEffect } from "react";
// // // import "./Contact.css";

// // // const Contact = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     message: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     const emailBody = `
// // //       Name: ${formData.name}%0A
// // //       Email: ${formData.email}%0A
// // //       Phone: ${formData.phone}%0A
// // //       Message: ${formData.message}
// // //     `;
// // //     window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
// // //   };

// // //   useEffect(() => {
// // //     const image = document.querySelector("#profile-image");
// // //     const animation = image.animate(
// // //       [
// // //         { transform: "translateY(0px)" },
// // //         { transform: "translateY(-10px)" },
// // //         { transform: "translateY(0px)" },
// // //       ],
// // //       {
// // //         duration: 3000,
// // //         iterations: Infinity,
// // //       }
// // //     );

// // //     return () => animation.cancel();
// // //   }, []);

// // //   return (
// // //     <section id="contact-section" aria-labelledby="contact-heading">
// // //       <div className="container">
// // //         <header id="contact-header">
// // //           <h1 id="contact-heading">Get in Touch</h1>
// // //           <p id="contact-description">
// // //             Feel free to reach out using the form or the links below!
// // //           </p>
// // //         </header>

// // //         <div id="contact-content">
// // //           {/* Left Side - Contact Info */}
// // //           <aside id="contact-info">
// // //             <div id="profile-image-wrapper">
// // //               <img
// // //                 id="profile-image"
// // //                 src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg"
// // //                 alt="Profile"
// // //               />
// // //             </div>
// // //             <ul id="contact-links">
// // //               <li>
// // //                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
// // //                   LinkedIn
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="https://github.com" target="_blank" rel="noopener noreferrer">
// // //                   GitHub
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </aside>

// // //           {/* Right Side - Contact Form */}
// // //           <form id="contact-form" onSubmit={handleSubmit} aria-labelledby="form-heading">
// // //             <h2 id="form-heading">Send a Message</h2>

// // //             <div id="form-group">
// // //               <label htmlFor="name">Your Name</label>
// // //               <input
// // //                 id="name"
// // //                 type="text"
// // //                 name="name"
// // //                 value={formData.name}
// // //                 onChange={handleChange}
// // //                 placeholder="Enter your name"
// // //                 required
// // //               />
// // //             </div>

// // //             <div id="form-group">
// // //               <label htmlFor="email">Your Email</label>
// // //               <input
// // //                 id="email"
// // //                 type="email"
// // //                 name="email"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 placeholder="Enter your email"
// // //                 required
// // //               />
// // //             </div>

// // //             <div id="form-group">
// // //               <label htmlFor="phone">Your Phone</label>
// // //               <input
// // //                 id="phone"
// // //                 type="text"
// // //                 name="phone"
// // //                 value={formData.phone}
// // //                 onChange={handleChange}
// // //                 placeholder="Enter your phone number"
// // //               />
// // //             </div>

// // //             <div id="form-group">
// // //               <label htmlFor="message">Your Message</label>
// // //               <textarea
// // //                 id="message"
// // //                 name="message"
// // //                 value={formData.message}
// // //                 onChange={handleChange}
// // //                 rows="5"
// // //                 placeholder="Write your message here"
// // //                 required
// // //               ></textarea>
// // //             </div>

// // //             <button type="submit" id="submit-button">
// // //               Send Message
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Contact;


// // import React, { useState, useEffect } from "react";
// // import "./Contact.css";
// // import { FaGithub, FaFacebookF, FaTiktok } from 'react-icons/fa'; // Importing social media icons

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const emailBody = `
// //       Name: ${formData.name}%0A
// //       Email: ${formData.email}%0A
// //       Phone: ${formData.phone}%0A
// //       Message: ${formData.message}
// //     `;
// //     window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
// //   };

// //   useEffect(() => {
// //     const image = document.querySelector("#profile-image");
// //     const animation = image.animate(
// //       [
// //         { transform: "translateY(0px)" },
// //         { transform: "translateY(-10px)" },
// //         { transform: "translateY(0px)" },
// //       ],
// //       {
// //         duration: 3000,
// //         iterations: Infinity,
// //       }
// //     );

// //     return () => animation.cancel();
// //   }, []);

// //   return (
// //     <section id="contact-section" aria-labelledby="contact-heading">
// //       <div className="container">
// //         <header id="contact-header">
// //           <h1 id="contact-heading">Get in Touch</h1>
// //           <p id="contact-description">
// //             Feel free to reach out using the form or the links below!
// //           </p>
// //         </header>

// //         <div id="contact-content">
// //           {/* Left Side - Cover Image */}
// //           <aside id="contact-info">
// //             <div id="profile-image-wrapper">
// //               <img
// //                 id="profile-image"
// //                 src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg"
// //                 alt="Profile"
// //               />
// //             </div>
// //           </aside>

// //           {/* Right Side - Contact Form */}
// //           <form id="contact-form" onSubmit={handleSubmit} aria-labelledby="form-heading">
// //             <h2 id="form-heading">Send a Message</h2>

// //             <div id="form-group">
// //               <label htmlFor="name">Your Name</label>
// //               <input
// //                 id="name"
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 placeholder="Enter your name"
// //                 required
// //               />
// //             </div>

// //             <div id="form-group">
// //               <label htmlFor="email">Your Email</label>
// //               <input
// //                 id="email"
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 placeholder="Enter your email"
// //                 required
// //               />
// //             </div>

// //             <div id="form-group">
// //               <label htmlFor="phone">Your Phone</label>
// //               <input
// //                 id="phone"
// //                 type="text"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 placeholder="Enter your phone number"
// //               />
// //             </div>

// //             <div id="form-group">
// //               <label htmlFor="message">Your Message</label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 rows="5"
// //                 placeholder="Write your message here"
// //                 required
// //               ></textarea>
// //             </div>

// //             <button type="submit" id="submit-button">
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Footer with Social Links */}
// //       <footer id="contact-footer">
// //         <div className="footer-content">
// //           <ul className="social-links">
// //             <li>
// //               <a href="https://github.com" target="_blank" rel="noopener noreferrer">
// //                 <FaGithub size={30} />
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
// //                 <FaTiktok size={30} />
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
// //                 <FaFacebookF size={30} />
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </footer>
// //     </section>
// //   );
// // };

// // export default Contact;


// import React, { useState, useEffect } from "react";
// import "./Contact.css";
// import { FaGithub, FaFacebookF, FaTiktok } from 'react-icons/fa'; // Importing social media icons

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const emailBody = `
//       Name: ${formData.name}%0A
//       Email: ${formData.email}%0A
//       Phone: ${formData.phone}%0A
//       Message: ${formData.message}
//     `;
//     window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
//   };

//   useEffect(() => {
//     const image = document.querySelector("#profile-image");
//     const animation = image.animate(
//       [
//         { transform: "translateY(0px)" },
//         { transform: "translateY(-10px)" },
//         { transform: "translateY(0px)" },
//       ],
//       {
//         duration: 3000,
//         iterations: Infinity,
//       }
//     );

//     return () => animation.cancel();
//   }, []);

//   return (
//     <section id="contact-section" aria-labelledby="contact-heading">
//       <div className="container">
//         <header id="contact-header" className="text-center">
//           <h1 id="contact-heading">Get in Touch</h1>
//           <p id="contact-description">
//             Feel free to reach out using the form or the links below!
//           </p>
//         </header>

//         <div id="contact-content" className="d-flex">
//           {/* Left Side - Cover Image */}
//           <aside id="contact-info" className="col-md-6">
//             <div id="profile-image-wrapper">
//               <img
//                 id="profile-image"
//                 src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg"
//                 alt="Profile"
//               />
//             </div>
//           </aside>

//           {/* Right Side - Contact Form */}
//           <form id="contact-form" className="col-md-6" onSubmit={handleSubmit} aria-labelledby="form-heading">
//             <h2 id="form-heading">Send a Message</h2>

//             <div id="form-group">
//               <label htmlFor="name">Your Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             <div id="form-group">
//               <label htmlFor="email">Your Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div id="form-group">
//               <label htmlFor="phone">Your Phone</label>
//               <input
//                 id="phone"
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             <div id="form-group">
//               <label htmlFor="message">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 placeholder="Write your message here"
//                 required
//               ></textarea>
//             </div>

//             <button type="submit" id="submit-button">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer with Social Links */}
//       <footer id="contact-footer" className="bg-dark text-light py-3">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-12 text-center">
//               <ul className="social-links list-inline">
//                 <li className="list-inline-item">
//                   <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
//                     <FaGithub size={30} />
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
//                     <FaTiktok size={30} />
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
//                     <FaFacebookF size={30} />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default Contact;


import React, { useState, useEffect } from "react";
import "./Contact.css";
import { FaGithub, FaFacebookF, FaTiktok } from 'react-icons/fa'; // Importing social media icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
      Name: ${formData.name}%0A
      Email: ${formData.email}%0A
      Phone: ${formData.phone}%0A
      Message: ${formData.message}
    `;
    window.location.href = `mailto:shhbdad@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
  };

  useEffect(() => {
    const image = document.querySelector("#profile-image");
    const animation = image.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-10px)" },
        { transform: "translateY(0px)" },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <section id="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <header id="contact-header" className="text-center">
          <h1 id="contact-heading">Get in Touch</h1>
          <p id="contact-description">
            Feel free to reach out using the form or the links below!
          </p>
        </header>

        <div id="contact-content" className="d-flex">
          {/* Left Side - Cover Image */}
          <aside id="contact-info" className="col-md-6">
            <div id="profile-image-wrapper">
              <img
                id="profile-image"
                src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg"
                alt="Profile"
              />
            </div>
          </aside>

          {/* Right Side - Contact Form */}
          <form id="contact-form" className="col-md-6" onSubmit={handleSubmit} aria-labelledby="form-heading">
            <h2 id="form-heading">Send a Message</h2>

            <div id="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div id="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div id="form-group">
              <label htmlFor="phone">Your Phone</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div id="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <button type="submit" id="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer with Social Links and Text */}
      <footer id="contact-footer" className="bg-dark text-light py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <ul className="social-links list-inline">
                <li className="list-inline-item">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub size={30} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaTiktok size={30} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebookF size={30} />
                  </a>
                </li>
              </ul>
              <p className="footer-text">© 2024 My Portfolio. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
