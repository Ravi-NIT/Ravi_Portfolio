import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/Ravi.jpg";
import "../App.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <motion.div
          className="home-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImage}
            alt="Ravi Shankar Pandey"
            className="hover-image"
          />
        </motion.div>

        <motion.div
          className="home-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="gradient-text">
            <span>Hello, I'm</span> <strong>Ravi Shankar Pandey</strong>
            <span className="animated-underline"></span>
          </h1>
          <p>
            Mechanical Engineering Postgraduate | R&D & Design Enthusiast |
            Skilled in CAD, FEA, CFD | Passionate About Thermal Systems &
            Rotating Machinery Innovation
          </p>
          <div className="home-buttons">
            <a
              href="/Saurav_Portfolio/Saurav_Kumar_Resume.pdf"
              className="btn glass"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              href="https://github.com/Ravi-NIT"
              target="_blank"
              rel="noreferrer"
              className="btn solid"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <a href="https://github.com/Ravi-NIT" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ravi-shankar-pandey-a28969240"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/ravibabu2014?igsh=MTNkdjE5aXZqeGR0cA=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </motion.div>

      <section className="work-flow-chart">
        <h2>Professional Journey & Achievements</h2>

        <div className="arrow">↓</div>

        <div className="level level-1">
          <div className="box">
            <h3>Brahmashira Astra Bharat Pvt. Ltd. (Sep 2022)</h3>
            <p>
            Collaborated on custom design solutions for mechanical subassemblies
            </p>
            <p>
            Developed prototypes and assisted in BOM creation and revision updates
            </p>
            <p>
            Generated SolidWorks part drawings, applied GD&T, and ensured design feasibility
            </p>
            <p>Worked closely with manufacturing to address real-world challenges and improve manufacturability.</p>
          </div>
        </div>

        <div className="arrow">↓</div>

        <div className="level level-2">
          <div className="box">
            <h3 className="dark-text">NTPC (Jun–Jul 2022)</h3>
            <ul>
              <li className="dark-text">
                Observed operations and system layouts for thermal equipment.
              </li>
              <li className="dark-text">
                Analyzed cooling tower efficiency and contributed to performance
                reporting.
              </li>
            </ul>
          </div>
        </div>

        <div className="arrow">↓</div>

        <div className="level level-3">
          <div className="box">
            <h3>Technical Skills & Certifications</h3>
            <p>
              <strong>CAD Tools:</strong> SolidWorks (Part Design, Assembly,
              Motion Study), AutoCAD (2D and 3D Drafting), CATIA V5 (Product
              Design, Surface Modeling, Sheet Metal)
            </p>
            <p>
              <strong>Simulation:</strong> ANSYS (Thermal, Structural)
            </p>
            <p>
              <strong>Soft Skills:</strong> Cross-functional teamwork, Design
              troubleshooting, Record keeping, Project urgency etc.
            </p>
            <div>
              <strong>Certifications:</strong>
              <ul>
                <li>SolidWorks (Assembly, GD&T, Motion Study)</li>
                <li>AutoCAD (2D & 3D Drafting)</li>
                <li>CATIA V5 (Product, Surface, Sheet Metal)</li>
                <li>ANSYS (Structural, Modal, Thermal)</li>
                <li>Corporate Training: Quality Tools & CAD Systems</li>
                <li>Short Term Course – NIT Kurukshetra (AMMPS-25)</li>
              </ul>
            </div>
          </div>

          <div className="box">
            <h3>Education & Foundation</h3>
            <p>
              <strong>Master's Degree:</strong> Thermal Engineering, NIT
              Kurukshetra (2024-2026)
            </p>
            <p>
              <strong>Bachelor's Degree:</strong> Mechanical Engineering, Dr.
              A.P.J. Abdul Kalam Technical University (AKTU) (2019-2023)
            </p>
            <p>
              <strong>Intermediate:</strong> Science (PCM), Sri Chaitanya
              (2016-2019)
            </p>
            <p>
              <strong>High School:</strong> 2014-2016 (CBSE)
            </p>
            <p>
              <strong>Paper Publication:</strong> A review on the effect of
              Avalanches in India (EKANSH JOURNAL, ISSN: 2230-9756)
            </p>
          </div>

          <div className="box">
            <h3>Patent Publication</h3>
            <p>
              Avalanche Resistance Structure Cum Shelter for Troops and People
              at High Altitude Regions.
            </p>
            <p>
              The Patent Journal No. 5/2023, Page No: 8126. (Under Examination)
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
