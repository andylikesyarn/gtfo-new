import { useState } from "react";
import gftoImage from "./assets/GTFO!.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

function Home() {
  const [isPassportSectionOpen, setIsPassportSectionOpen] = useState(false);
  const [isVisaSectionOpen, setIsVisaSectionOpen] = useState(false);

  const togglePassportSection = () => {
    setIsPassportSectionOpen(!isPassportSectionOpen);
  };

  const toggleVisaSection = () => {
    setIsVisaSectionOpen(!isVisaSectionOpen);
  };

  return (
    <>
      <div className="header-image">
        <img src={gftoImage} alt="GFTO" className="gfto-logo" />
      </div>
      
      {/* Passport Section */}
      <div 
        className="passport-section-header" 
        onClick={togglePassportSection}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            togglePassportSection();
          }
        }}
      >
        <h1>Need a Passport? Click here!</h1>
        <div className="expand-icon">
          {isPassportSectionOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
        </div>
      </div>

      {isPassportSectionOpen && (
        <div className="cards-container">
          <div className="card card2">
          <div className="card-content">
            <div className="main-text">
              If you've <span>gotten a passport before as an adult</span>
            </div>
            <div className="card-arrow">↓</div>
            <Link to="/Renew" className="route-button">
              Click here
            </Link>
          </div>
        </div>

        <div className="card card1">
          <div className="card-content">
            <div className="main-text">
              If you've <span> NEVER gotten a passport before as an adult</span>
            </div>
            <div className="card-arrow">↓</div>
            <Link to="/new" className="route-button">
              Click here
            </Link>
          </div>
        </div>

        <div className="card card5">
          <div className="card-content">
            {" "}
            <span className="main-text">
              {" "}
              If you've gotten a passport before as an adult but you're changing
              your name or gender marker
            </span>
            <div className="card-arrow">↓</div>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              <Link to="/change" className="route-button">
                General Changes
              </Link>
              <Link to="/gender-marker" className="route-button">
                Gender Marker
              </Link>
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Visa Section */}
      <div 
        className="passport-section-header" 
        onClick={toggleVisaSection}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleVisaSection();
          }
        }}
      >
        <h1>Need a Visa? Click here!</h1>
        <div className="expand-icon">
          {isVisaSectionOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
        </div>
      </div>

      {isVisaSectionOpen && (
        <div className="visa-content">
          <div className="card">
            <div className="card-content">
              <div className="main-text">
                Explore visa options for international relocation
              </div>
              <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
                Learn about visa types, requirements, and country-specific information for Mexico, Canada, Uruguay, and more.
              </p>
              <div className="card-arrow">↓</div>
              <Link to="/visa" className="route-button">
                View Visa Information
              </Link>
            </div>
          </div>
        </div>
      )}
      
      <div className="walkthrough-link">
        <p>
          📋{" "}
          <a
            href="https://docs.google.com/document/d/1fJChW9EjYKIorDq2mtEj2GNmfdGDoBcHO4DErUGQQNw/edit?tab=t.0#heading=h.636p23r9m3xm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detailed passport application walkthrough
          </a>
        </p>
        <p>
          📋{" "}
          <a
            href="https://docs.google.com/document/d/1BBO9E5pA5lFGO-oDSOKRcCvELDWGJQD6TJ2TE7G0WV0/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes from our 9/21 workshop
          </a>
        </p>
        <p>
          🗓️{" "}
          <Link to="/workshops">
            View upcoming workshops
          </Link>
        </p>
      </div>
    </>
  );
}

export default Home;
