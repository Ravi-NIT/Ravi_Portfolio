import React from "react";
import "../index.css";

const servicesData = [
  {
    title: "CAD Design & Simulation",
    description: "End-to-end CAD design and simulation using SolidWorks, AutoCad, Ansys, CFD, FEA, Modal Analysis, Thermal Analysis.",
    category: "Development"
  },
  {
    title: "Product Design & Development",
    description: "Custom product design and development using SolidWorks, AutoCad, Ansys, CFD, FEA, Modal Analysis, Thermal Analysis.",
    category: "Enterprise"
  },
  
];

const categoryColors = {
  Development: "bg-blue-100 text-blue-800",
  Enterprise: "bg-purple-100 text-purple-800",
  Mobile: "bg-green-100 text-green-800",
  Leadership: "bg-orange-100 text-orange-800",
  Healthcare: "bg-red-100 text-red-800",
  Corporate: "bg-indigo-100 text-indigo-800",
  Database: "bg-yellow-100 text-yellow-800",
  Backend: "bg-gray-100 text-gray-800",
  Optimization: "bg-pink-100 text-pink-800",
  Quality: "bg-teal-100 text-teal-800",
  Education: "bg-cyan-100 text-cyan-800",
  DevOps: "bg-lime-100 text-lime-800",
  Consulting: "bg-amber-100 text-amber-800"
};

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        {/* Work Experience Section */}
        <div style={{ marginBottom: '60px', padding: '30px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 209, 255, 0.2)' }}>
          <h2 className="services-heading" style={{ fontSize: '2rem', marginBottom: '20px' }}>Current Experience</h2>
          <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '25px', padding: '20px', background: 'rgba(0, 209, 255, 0.1)', borderRadius: '15px', border: '1px solid rgba(0, 209, 255, 0.3)' }}>
              <h3 style={{ color: '#00d1ff', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '600' }}>
                Mechanical Engineer
              </h3>
              <p style={{ color: '#00d1ff', fontSize: '1.1rem', marginBottom: '8px', fontWeight: '500' }}>
                Brahmashira Astra Bharat Pvt. Ltd. | September 2022 - Present
              </p>
              <ul style={{ color: '#d4e5f5', fontSize: '0.95rem', lineHeight: '1.6', listStyle: 'none', padding: '0' }}>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Conducted research and studied topics such as shape charge, mechanical timer, and related subjects.
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Studied and analyzed the operation and performance aspects of cooling towers, gaining hands-on experience in thermal power plant systems.
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Led a team to design and analyze an avalanche resistance equipment cum shelter using solidWorks, Autocad and Ansys.
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Presented the project to The Patent Office and EKANSH Journal, showcasing innovative engineering solutions for high altitude safety.
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Designed and assembly a full 3D CAD model of a compact loader using SolidWorks.
                </li>
              </ul>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ color: '#c0d3df', fontSize: '1rem', marginBottom: '15px' }}>
                <strong style={{ color: '#00d1ff' }}>Technologies:</strong> SolidWorks, AutoCad, Ansys, CFD, FEA, Modal Analysis, Thermal Analysis
              </p>
              <p style={{ color: '#00d1ff', fontSize: '1.1rem', fontWeight: '600' }}>
                Available for Freelance Projects & Technical Consulting
              </p>
            </div>
          </div>
        </div>

        <h2 className="services-heading">Professional Services</h2>
        <p className="services-subtitle">Comprehensive Full Stack Development & Leadership Solutions</p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div style={{ marginTop: '60px', padding: '30px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 209, 255, 0.2)' }}>
          <h3 style={{ color: '#00d1ff', fontSize: '1.5rem', marginBottom: '20px', textShadow: '0 0 8px rgba(0, 209, 255, 0.3)' }}>
            Why Choose My Services?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: '#00d1ff', fontSize: '1.2rem', marginBottom: '10px' }}>⚡ Fast Delivery</h4>
              <p style={{ color: '#d4e5f5', fontSize: '0.9rem' }}>Proven track record of delivering projects 2+ weeks ahead of schedule</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: '#00d1ff', fontSize: '1.2rem', marginBottom: '10px' }}>✅ Quality Assured</h4>
              <p style={{ color: '#d4e5f5', fontSize: '0.9rem' }}>95+ Lighthouse scores and enterprise-grade code quality standards</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: '#00d1ff', fontSize: '1.2rem', marginBottom: '10px' }}>👥 Team Leadership</h4>
              <p style={{ color: '#d4e5f5', fontSize: '0.9rem' }}>Experience leading teams of 5-7 developers with 35% productivity improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
