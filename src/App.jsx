import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import New from "./pages/New";
import Renew from "./pages/Renew";
import Change from "./pages/Change";
import Fees from "./pages/Fees";
import Appointments from "./pages/Appointments";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import GenderMarker from "./pages/GenderMarker";
import Visa from "./pages/Visa";
import gftoImage from "./assets/GTFO!.png";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-left">
              <Link to="/" className="nav-logo">
                GTFO <span className="small-text">by QT Support Services</span>
              </Link>
            </div>
            <div className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="dropdown">
                <span className="dropdown-trigger">
                  Passports
                  <span className="dropdown-arrow">▼</span>
                </span>
                <div className="dropdown-content">
                  <div className="dropdown-section">
                    <div className="dropdown-section-title">Application Types</div>
                    <Link
                      to="/new"
                      className="dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      First-time Passport
                    </Link>
                    <Link
                      to="/renew"
                      className="dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Renew Passport
                    </Link>
                    <Link
                      to="/change"
                      className="dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Change/Correct Passport
                    </Link>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-section">
                    <div className="dropdown-section-title">Additional</div>
                    <Link
                      to="/fees"
                      className="dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Fees
                    </Link>
                    <Link
                      to="/appointments"
                      className="dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Appointments
                    </Link>
                    <Link
                      to="/gender-marker"
                      className="dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Gender Marker Changes
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/visa"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Visa
              </Link>
              <Link
                to="/workshops"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Workshops
              </Link>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button>
                <a href="https://ko-fi.com/andystowersforest">Donate</a>
              </button>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="hamburger-menu"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
              ></span>
            </button>
          </div>
        </nav>

        {/* Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/renew" element={<Renew />} />
            <Route path="/change" element={<Change />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/about" element={<About />} />
            <Route path="/gender-marker" element={<GenderMarker />} />
            <Route path="/visa" element={<Visa />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>
              Created September 2025 by Andy Stowers Forest | donate to our work
              here:{" "}
              <a
                href="https://ko-fi.com/andystowersforest"
                target="_blank"
                rel="noopener noreferrer"
                className="donate-link"
              >
                buy me a Coffee
              </a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
