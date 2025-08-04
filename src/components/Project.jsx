import React from "react";

const projectsData = [
  {
    // url: "https://tamdhealth.com/",
    title: "Bobcat Loader Design & Simulation",
    technologies: ["SolidWorks", "AutoCad", "ANSYS", "CFD", "FEA", "Modal Analysis", "Thermal Analysis"],
    details: [
      "Designed and assembly a full 3D CAD model of a compact loader using SolidWorks.",
      "Simulate motion, followed by 2D drafting in AutoCad.",
      "Performed FEA analysis to evaluate the structural integrity of the loader.",
      "Performed CFD analysis to evaluate the performance of the loader.",
      "Performed modal analysis to evaluate the natural frequency of the loader.",
      "Performed thermal analysis to evaluate the temperature distribution of the loader.",
    ],
  },
  {
    // url: "https://traincapetech.in/",
    title: "Avalanche-Resistant Shelter",
    technologies: ["SolidWorks", "AutoCad", "ANSYS", "CFD", "FEA", "Modal Analysis", "Thermal Analysis"],
    details: [
      "Designed and assembly a full 3D CAD model of a avalanche-resistant shelter using SolidWorks.",
      "Simulate motion, followed by 2D drafting in AutoCad.",
      "Performed FEA analysis to evaluate the structural integrity of the shelter.",
      "Performed CFD analysis to evaluate the performance of the shelter.",
      "Performed modal analysis to evaluate the natural frequency of the shelter.",
      "Performed thermal analysis to evaluate the temperature distribution of the shelter.",
      "Led a team to design and analyze an avalanche resistance equipment cum shelter using solidWorks, Autocad and Ansys.",
      "Presented the project to The Patent Office and EKANSH Journal, showcasing innovative engineering solutions for high altitude safety.",
    ]
  },
  {
    // url: "https://traincapecrm.traincapetech.in",
    title: "Mechanical Floor Cleaner – Prototyping Project",
    technologies: ["SolidWorks", "AutoCad", "ANSYS", "CFD", "FEA", "Modal Analysis", "Thermal Analysis"],
    details: [
      "Designed and hand-built a low-cost floor cleaner from recycled parts.",
      "Emphasized sustainability, assembly feasibility, and mechanical durability.",
      "Utilized SolidWorks for detailed 3D modeling and analysis.",
      "Conducted FEA analysis to evaluate the structural integrity of the floor cleaner.",
      "Secured 1st place in 'Hands on Practice' competition; project showcased innovative waste reduction strategies and demonstrated mastery of mechanical principles.",
      "Presented the project to The Patent Office and EKANSH Journal, showcasing innovative engineering solutions for high altitude safety.",
    ],
  },
  // {
  //   title: "E-Commerce Product Showcase Website",
  //   technologies: ["React", "Vite", "Tailwind CSS", "React Router DOM", "Lucide React", "ESLint"],
  //   details: [
  //     "Developed a responsive and visually compelling e-commerce platform tailored for showcasing premium shoes and watches.",
  //     "Implemented a dynamic product catalog with seamless navigation using React Router DOM (v7) and Vite for blazing-fast builds.",
  //     "Used Tailwind CSS for mobile-first design and modular utility-based styling to ensure pixel-perfect layouts across devices.",
  //     "Integrated lazy loading, code-splitting, and optimized routing for enhanced performance and SEO alignment.",
  //     "Built a creator-only access panel with secure controls for uploading and managing product listings.",
  //     "Crafted custom iconography and elegant UI using Lucide React, ensuring visual consistency and brand alignment.",
  //     "Configured CI/CD deployment pipeline to Hostinger for smooth hosting and scalability readiness.",
  //     "Structured code with ESLint and enforced clean architecture principles using React hooks and component isolation.",
  //     "Achieved 98% mobile responsiveness score and 40% faster page load times compared to traditional e-commerce platforms.",
  //   ]
  // },
  // {
  //   title: "React Native Mobile Application (In Development)",
  //   technologies: ["React Native", "Expo", "JavaScript", "AsyncStorage", "React Navigation"],
  //   details: [
  //     "Currently developing a cross-platform mobile application using React Native and Expo framework.",
  //     "Implementing native device features including camera integration, push notifications, and offline data storage.",
  //     "Building responsive UI components that adapt seamlessly to both iOS and Android platforms.",
  //     "Integrating AsyncStorage for local data persistence and React Navigation for smooth screen transitions.",
  //     "Following React Native best practices for performance optimization and memory management.",
  //     "Planning to publish on both Google Play Store and Apple App Store upon completion of testing phase.",
  //     "Conducting thorough testing across multiple device configurations to ensure consistent user experience.",
  //     "Expected to launch in Q2 2025 with plans for 10,000+ downloads in the first quarter.",
  //   ]
  // },
  // {
  //   title: "Team Leadership & Intern Management Projects",
  //   technologies: ["Project Management", "Code Review", "Mentorship", "Agile Methodology"],
  //   details: [
  //     "Successfully leading and mentoring 5-7 interns regularly, providing guidance on full-stack development best practices.",
  //     "Conducting technical interviews for intern positions, evaluating candidates on JavaScript, React, and problem-solving skills.",
  //     "Established structured onboarding process for new interns, reducing ramp-up time by 60%.",
  //     "Implemented code review processes and pair programming sessions to maintain high code quality standards.",
  //     "Organized weekly technical workshops covering advanced topics in React, Node.js, and database optimization.",
  //     "Managed multiple concurrent projects with cross-functional teams, ensuring timely delivery and quality outcomes.",
  //     "Developed internal documentation and coding standards that improved team productivity by 35%.",
  //     "Successfully transitioned 4 interns to full-time positions based on their performance and growth under my mentorship.",
  //   ]
  // }
];

const Project = () => {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Professional Portfolio</h2>
        <p className="projects-subtitle">Full Stack Development Projects & Leadership Experience</p>
        <p style={{ color: '#c0d3df', fontSize: '1rem', textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
          Showcasing comprehensive full-stack solutions, team leadership, and innovative projects 
          developed at Traincape Technology and as an independent developer.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card">
              <div style={{ marginBottom: '20px' }}>
                {project.url ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                    <h4 className="project-title" style={{ margin: '0', flex: '1', minWidth: '200px' }}>
                      {project.title}
                    </h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        background: '#00d1ff',
                        color: '#000',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#00c3cc';
                        e.target.style.color = '#fff';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = '#00d1ff';
                        e.target.style.color = '#000';
                      }}
                    >
                      <span style={{ marginRight: '8px' }}>🔗</span>
                      View Live
                    </a>
                  </div>
                ) : (
                  <h4 className="project-title" style={{ marginBottom: '15px' }}>
                    {project.title}
                  </h4>
                )}
                
                {project.technologies && (
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '4px 8px',
                            background: 'rgba(0, 209, 255, 0.2)',
                            color: '#00d1ff',
                            fontSize: '0.75rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 209, 255, 0.3)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <ul className="project-description">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div style={{ 
          marginTop: '60px', 
          padding: '30px', 
          background: 'rgba(255, 255, 255, 0.05)', 
          borderRadius: '20px', 
          border: '1px solid rgba(0, 209, 255, 0.2)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#00d1ff', fontSize: '1.8rem', marginBottom: '15px', textShadow: '0 0 8px rgba(0, 209, 255, 0.3)' }}>
            Ready to Collaborate?
          </h3>
          <p style={{ color: '#c0d3df', fontSize: '1.1rem', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px' }}>
            With extensive experience in full-stack development, team leadership, and project management, 
            I'm ready to bring your ideas to life. Let's discuss your next project!
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            <span style={{ 
              padding: '10px 20px', 
              background: 'rgba(0, 255, 0, 0.2)', 
              color: '#00ff88', 
              borderRadius: '8px', 
              fontWeight: '600',
              border: '1px solid rgba(0, 255, 0, 0.3)'
            }}>
              ✓ Available for Freelance Projects
            </span>
            <span style={{ 
              padding: '10px 20px', 
              background: 'rgba(138, 43, 226, 0.2)', 
              color: '#da70d6', 
              borderRadius: '8px', 
              fontWeight: '600',
              border: '1px solid rgba(138, 43, 226, 0.3)'
            }}>
              ✓ Team Leadership Experience
            </span>
            <span style={{ 
              padding: '10px 20px', 
              background: 'rgba(255, 165, 0, 0.2)', 
              color: '#ffa500', 
              borderRadius: '8px', 
              fontWeight: '600',
              border: '1px solid rgba(255, 165, 0, 0.3)'
            }}>
              ✓ Full Stack Expertise
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
