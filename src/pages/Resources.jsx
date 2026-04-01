import { Link } from "react-router-dom";
import "./GenderMarker.css";

function Resources() {
  return (
    <div className="page-container">
      <h1>Resources</h1>

      <div className="content-section">
        <h2>About This Page</h2>
        <p>
          A curated list of organizations, helplines, and resources for trans,
          nonbinary, and LGBTQ+ people by country. This page will grow over
          time — if you know of a resource that should be listed here, reach
          out to Andy via the{" "}
          <Link to="/about">About page</Link>.
        </p>
      </div>

      {/* ── United Kingdom ── */}
      <div className="content-section">
        <h2>United Kingdom</h2>

        <div className="resource-card">
          <div className="resource-header">
            <h3>
              <a
                href="https://www.stonewall.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stonewall UK
              </a>
            </h3>
            <span className="resource-tag">Advocacy / Legal</span>
          </div>
          <p>
            The UK's leading LGBTQ+ charity. Stonewall campaigns for equality
            and acceptance, publishes policy research, runs workplace inclusion
            programs, and provides guidance on LGBTQ+ rights across England,
            Scotland, Wales, and Northern Ireland.
          </p>
          <p className="resource-url">stonewall.org.uk</p>
        </div>

        <div className="resource-card">
          <div className="resource-header">
            <h3>
              <a
                href="https://switchboard.lgbt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Switchboard
              </a>
            </h3>
            <span className="resource-tag">Helpline / Support</span>
          </div>
          <p>
            The national LGBTQIA+ support line in the UK. Staffed entirely by
            LGBTQIA+ volunteers, Switchboard offers non-judgmental, confidential
            support by phone, email, and live chat — covering anything related
            to sexuality and gender identity, including sexual health,
            relationships, mental health, and more.
          </p>
          <p className="resource-url">switchboard.lgbt</p>
        </div>
      </div>

      {/* ── More countries coming ── */}
      <div className="content-section">
        <h2>More Coming Soon</h2>
        <p>
          Resources for the US, Mexico, Canada, Uruguay, and other countries
          will be added here. If you have a suggestion,{" "}
          <a
            href="https://www.instagram.com/andysforest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reach out to Andy on Instagram
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Resources;
