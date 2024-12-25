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
          {/* <aside id="contact-info" className="col-md-6">
            <div id="profile-image-wrapper">
              <img
                id="profile-image"
                src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg"
                alt="Profile"
              />
            </div>
          </aside> */}
          <aside id="contact-info" className="col-md-6 col-12">
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
