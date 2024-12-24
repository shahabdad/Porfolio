import React from 'react';
import './About.css';
const About = () => {
  return (
    <div id="about" className="text-light py-5">
      <div className="container" style={{ zIndex: 2, position: 'relative' }}>
        <h2 className="text-center  about">About Me</h2>
        <p className="text-center offset-1 me-5 description mt-5">
          Hello, I’m ShahabDad, a highly skilled MERN stack developer with a strong passion for crafting exceptional web solutions.
          With expertise in modern web technologies, I specialize in building responsive, user-friendly interfaces and scalable back-end systems.
          My goal is to deliver seamless user experiences and efficient applications, ensuring the highest standards of quality and performance.
        </p>
        <h3 className="text-center skill-n mt-4">My Skills</h3>
        <div className="skills mt-5">
          {[
            { name: 'HTML', value: 100 },
            { name: 'CSS', value: 70 },
            { name: 'Bootstrap', value: 80 },
            { name: 'JavaScript', value: 85 },
            { name: 'React', value: 80 },
            { name: 'Node.js', value: 75 },
            { name: 'Mongoose', value: 70 },
            { name: 'Express.js', value: 75 },
            { name: 'MongoDB', value: 80 },
          ].map((skill, index) => (
            <div key={index} className="skill-row d-flex align-items-center mb-4">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.value}%` }}
                  data-value={`${skill.value}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
