// // // import React from 'react';
// // // import { Navbar, Nav } from 'react-bootstrap';
// // // import './Navbar.css'; // Import custom CSS for styling

// // // const NavigationBar = () => {
// // //   return (
// // //     <Navbar bg="" variant="dark" expand="lg" className="custom-navbar">
// // //       <Navbar.Brand href="hi.jpg" className="me-auto brand"></Navbar.Brand>
// // //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
// // //       <Navbar.Collapse id="basic-navbar-nav">
// // //         <Nav className="ms-auto ka">
// // //           <Nav.Link href="#home" className="nav-link i">Home</Nav.Link>
// // //           <Nav.Link href="#about" className="nav-link">About</Nav.Link>
// // //           <Nav.Link href="#experience" className="nav-link">Experience</Nav.Link>
// // //           <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
// // //         </Nav>
// // //       </Navbar.Collapse>
// // //     </Navbar>
// // //   );
// // // };

// // // export default NavigationBar;


// // import React from 'react';
// // import { Navbar, Nav } from 'react-bootstrap';
// // import './Navbar.css'; // Import custom CSS for styling

// // const NavigationBar = () => {
// //   return (
// //     <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
// //       {/* Add the logo inside Navbar.Brand */}
// //       <Navbar.Brand href="#home" className="me-auto brand">
// //         <img
// //           src="hi.jpg" // Path to your logo image
// //           alt="Logo"
// //           className="navbar-logo"
// //         />
// //       </Navbar.Brand>
// //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //       <Navbar.Collapse id="basic-navbar-nav">
// //         <Nav className="ms-auto ka">
// //           <Nav.Link href="#home" className="nav-link i">Home</Nav.Link>
// //           <Nav.Link href="#about" className="nav-link">About</Nav.Link>
// //           <Nav.Link href="#experience" className="nav-link">Experience</Nav.Link>
// //           <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
// //         </Nav>
// //       </Navbar.Collapse>
// //     </Navbar>
// //   );
// // };

// // export default NavigationBar;


// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import './Navbar.css'; // Custom styles

// const NavigationBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
//       <Navbar.Brand href="#home" className="me-auto brand">
//         <img
//           src="hi.jpg" // Path to your logo
//           alt="Logo"
//           className="navbar-logo"
//         />
//         <span className="brand-text">My Portfolio</span>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto ka">
//           <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
//           <Nav.Link href="#about" className="nav-link">About</Nav.Link>
//           <Nav.Link href="#experience" className="nav-link">Experience</Nav.Link>
//           <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
//           <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavigationBar;


import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css"; // Custom CSS for animations and styles

const NavigationBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="custom-navbar sticky-top" // Sticky top ensures navbar stays visible
    >
      <Navbar.Brand href="#home" className="brand">
        <img
          src="hi.jpg" // Path to your logo
          alt="Logo"
          className="navbar-logo"
        />
        <span className="brand-name">My Portfolio</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link href="#experience" className="nav-link">
            Experience
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
