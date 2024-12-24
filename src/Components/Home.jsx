import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import "./Home.css";

const Home = () => {
  const fullText = "Developer";
  const [displayText, setDisplayText] = useState("");

  const homeRef = useRef(null);
  const profileImageRef = useRef(null);
  const socialIconsRef = useRef(null);


  useEffect(() => {
    let index = 0;
    let isAdding = true;

    const interval = setInterval(() => {
      setDisplayText((prev) => {
        if (isAdding) {
          if (index < fullText.length) {
            index++;
            return fullText.slice(0, index);
          } else {
            isAdding = false;
            return prev;
          }
        } else {
          if (index > 0) {
            index--;
            return fullText.slice(0, index);
          } else {
            isAdding = true;
            return prev;
          }
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    
    gsap.fromTo(
      profileImageRef.current,
      { scale: 0.8, rotate: "0deg" },
      {
        scale: 1,
        rotate: "360deg",
        duration: 2,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      }
    );

    gsap.fromTo(
      socialIconsRef.current.children,
      { opacity: 0, y: 20, rotate: "-15deg" },
      {
        opacity: 1,
        y: 0,
        rotate: "0deg",
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section id="home" className="home-section mt-5" ref={homeRef}>
      <Container>
        {/* Profile Image Positioned at the Top */}
        <Row className="justify-content-center">
          <div className="profile-image-container">
            <img
              src="Hello.png" 
              alt="Profile"
              className="profile-image"
              // ref={profileImageRef}
            />
          </div>
        </Row>
        {/* Profile Details Below */}
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="name">ShahabDad</h1>
            <h3 className="title">
              MERN Stack&nbsp;
              <span className="animated-text">{displayText}</span>
            </h3>
            <p className="description offset-2 col-md-8 col-sm-4">
              I am a passionate developer specializing in building modern,
              high-quality, responsive web applications. With over a year of
              experience, I bring innovative solutions to life.
            </p>
            <div className="social-icons" ref={socialIconsRef}>
              <a href="https://facebook.com" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
