import React, { useState } from "react";
import { FaEye, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProjectImages.css";
import bobcatImage from "../assets/Bobcat.png";
import shelterImage from "../assets/Shelter.png";
import coolingImage from "../assets/Cooling.png";
import timerImage from "../assets/Timer.png";
import shapeChargeImage from "../assets/ShapeCharge.png";
import modalAnalysisImage from "../assets/ModalAnalysis.png";

const ProjectImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project images data - you can replace these with your actual images
  const projectImages = [
    {
      id: 1,
      title: "Bobcat Loader Design",
      description: "3D CAD model of compact loader designed in SolidWorks",
      category: "SolidWorks",
      imageUrl: bobcatImage, // Replace with your actual image path
      details: [
        "Full 3D CAD model design",
        "Motion simulation analysis",
        "Structural integrity evaluation",
        "Performance optimization"
      ]
    },
    {
      id: 2,
      title: "Avalanche-Resistant Shelter",
      description: "High-altitude safety equipment designed for extreme conditions",
      category: "ANSYS",
      imageUrl: shelterImage, // Replace with your actual image path
      details: [
        "Structural analysis using FEA",
        "CFD analysis for wind resistance",
        "Thermal analysis for insulation",
        "Modal analysis for vibration"
      ]
    },
    {
      id: 3,
      title: "Cooling Tower Analysis",
      description: "Thermal power plant cooling system optimization",
      category: "CFD",
      imageUrl: coolingImage, // Replace with your actual image path
      details: [
        "Thermal performance analysis",
        "Flow distribution optimization",
        "Heat transfer efficiency study",
        "Operational performance evaluation"
      ]
    },
    {
      id: 4,
      title: "Mechanical Timer Design",
      description: "Precision timing mechanism for specialized applications",
      category: "AutoCAD",
      imageUrl: timerImage, // Replace with your actual image path
      details: [
        "Precision mechanism design",
        "2D drafting and documentation",
        "Assembly optimization",
        "Manufacturing feasibility study"
      ]
    },
    {
      id: 5,
      title: "Shape Charge Analysis",
      description: "Advanced explosive device design and simulation",
      category: "FEA",
      imageUrl: shapeChargeImage, // Replace with your actual image path
      details: [
        "Structural integrity analysis",
        "Material behavior simulation",
        "Safety factor evaluation",
        "Performance optimization"
      ]
    },
    {
      id: 6,
      title: "Modal Analysis Study",
      description: "Vibration and frequency analysis for mechanical systems",
      category: "Modal Analysis",
      imageUrl: modalAnalysisImage, // Replace with your actual image path
      details: [
        "Natural frequency calculation",
        "Mode shape analysis",
        "Resonance prevention",
        "Dynamic response optimization"
      ]
    }
  ];

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % projectImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(projectImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? projectImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(projectImages[prevIndex]);
  };

  const categories = [...new Set(projectImages.map(img => img.category))];

  return (
    <div className="project-images-section">
      <div className="project-images-container">
        <h2 className="project-images-heading">Project Gallery</h2>
        <p className="project-images-subtitle">Mechanical Engineering Design & Analysis Portfolio</p>
        <p className="project-images-description">
          Explore my mechanical engineering projects showcasing expertise in CAD design, 
          simulation analysis, and innovative engineering solutions.
        </p>

        {/* Category Filter */}
        <div className="category-filter">
          <button 
            className="category-btn active"
            onClick={() => document.querySelectorAll('.image-card').forEach(card => card.style.display = 'block')}
          >
            All Projects
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className="category-btn"
              onClick={() => {
                document.querySelectorAll('.image-card').forEach(card => {
                  if (card.dataset.category === category) {
                    card.style.display = 'block';
                  } else {
                    card.style.display = 'none';
                  }
                });
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="project-images-grid">
          {projectImages.map((image, index) => (
            <div 
              key={image.id} 
              className="image-card"
              data-category={image.category}
              onClick={() => openImageModal(image, index)}
            >
              <div className="image-container">
                <img 
                  src={image.imageUrl} 
                  alt={image.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmMzNjM0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2YxZjVmOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <div className="image-overlay">
                  <FaEye className="view-icon" />
                  <span className="view-text">View Details</span>
                </div>
              </div>
              <div className="image-info">
                <h4 className="image-title">{image.title}</h4>
                <p className="image-description">{image.description}</p>
                <span className="image-category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImageModal}>
                <FaTimes />
              </button>
              
              <div className="modal-image-container">
                <button className="modal-nav prev" onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="modal-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmMzNjM0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2YxZjVmOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <button className="modal-nav next" onClick={nextImage}>
                  <FaChevronRight />
                </button>
              </div>

              <div className="modal-info">
                <h3 className="modal-title">{selectedImage.title}</h3>
                <p className="modal-description">{selectedImage.description}</p>
                <span className="modal-category">{selectedImage.category}</span>
                
                <div className="modal-details">
                  <h4>Project Details:</h4>
                  <ul>
                    {selectedImage.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="project-images-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>
            With expertise in CAD design, simulation analysis, and mechanical engineering, 
            I'm ready to bring your ideas to life. Let's discuss your next project!
          </p>
          <div className="cta-badges">
            <span className="cta-badge">✓ CAD Design</span>
            <span className="cta-badge">✓ Simulation Analysis</span>
            <span className="cta-badge">✓ Project Management</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImages; 