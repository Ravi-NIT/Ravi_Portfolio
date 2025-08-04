import React from "react";
import { FaRocket, FaFire, FaClock, FaUsers, FaLightbulb, FaCode, FaMobile, FaChartLine } from "react-icons/fa";
import "./About.css";
import profileImage from "../assets/Ravi.jpg"; // Make sure this path is correct

const About = () => {
  return (

      <main className="about-main">
        {/* Photo Section */}
        <div className="about-photo-section">
          <img src={profileImage} alt="Ravi Shankar Pandey" className="about-photo" />
        </div>

        {/* Text Section */}
        <div className="about-text-section">
          <h2>About Me</h2>
          <p>
            Hey there! I'm <span className="highlight">Ravi Shankar Pandey</span>, a Mechanical Engineer with a passion for CAD design and simulation.
          </p>

          <h3>Current Role & Responsibilities</h3>
          <ul className="about-list">
            <li>
              <FaUsers className="icon" />
              <strong>Team Leadership:</strong> Conducted research and studied topics such as shape charge, mechanical timer, and related subjects.
            </li>
            <li>
              <FaChartLine className="icon" />
              <strong>Project Management:</strong> Studied and analyzed the operation and performance aspects of cooling towers, gaining hands-on experience in thermal power plant systems.
            </li>
          </ul>

          <h3>Why Choose Me?</h3>
          <ul className="about-list">
            <li>
              <FaRocket className="icon" />
              <strong>Full Stack Expertise:</strong> Proficient in modern technologies including SolidWorks, AutoCad, Ansys, CFD, FEA, Modal Analysis, Thermal Analysis.
            </li>
            <li>
              <FaMobile className="icon" />
              <strong>Mobile Development:</strong> Led a team to design and analyze an avalanche resistance equipment cum shelter using solidWorks, Autocad and Ansys.
            </li>
            <li>
              <FaFire className="icon" />
              <strong>Project Highlights:</strong> Designed and assembly a full 3D CAD model of a compact loader using SolidWorks.
            </li>
            <li>
              <FaCode className="icon" />
              <strong>Code Quality & Mentorship:</strong> Presented the project to The Patent Office and EKANSH Journal, showcasing innovative engineering solutions for high altitude safety.
            </li>
            {/* <li>
              <FaClock className="icon" />
              <strong>  Performance Optimization:</strong> Specialized in creating high-performance applications with 95+ Lighthouse scores, implementing advanced optimization techniques including lazy loading, code splitting, and efficient database indexing.
            </li> */}
            {/* <li>
              <FaLightbulb className="icon" />
              <strong>Innovation-Driven:</strong> Continuously exploring cutting-edge technologies and implementing innovative solutions. From real-time communication systems using Socket.io to advanced data visualization with Chart.js, I stay ahead of industry trends.
            </li> */}
          </ul>

          <h3>Technical Expertise</h3>
          <div className="tech-stack">
            <div className="tech-category">
              <h4>SolidWorks:</h4>
              <p>SolidWorks, AutoCad, Ansys, CFD, FEA, Modal Analysis, Thermal Analysis</p>
            </div>
            <div className="tech-category">
              <h4>AutoCad:</h4>
              <p>AutoCad, Ansys, CFD, FEA, Modal Analysis, Thermal Analysis</p>
            </div>
            <div className="tech-category">
              <h4>ANSYS:</h4>
              <p>ANSYS, CFD, FEA, Modal Analysis, Thermal Analysis</p>
            </div>
            <div className="tech-category">
              <h4>CFD:</h4>
              <p>CFD, FEA, Modal Analysis, Thermal Analysis</p>
            </div>
            <div className="tech-category">
              <h4>FEA:</h4>
              <p>FEA, Modal Analysis, Thermal Analysis</p>
            </div>
          </div>

          <h3>Let's Connect:</h3>
          <p>
            Whether you're a recruiter looking for a skilled Mechanical Engineer with leadership experience, or a client seeking comprehensive CAD design and simulation solutions, I'm here to exceed your expectations. With proven experience in team management, enterprise application development, and cutting-edge technology implementation, I'm ready to drive your next project to success.
          </p>
          <p>
            <strong>Available for:</strong> Full-time opportunities, freelance projects, technical consulting, and team leadership roles.
          </p>
        </div>
      </main>
    
  );
};

export default About;
 