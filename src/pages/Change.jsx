import { useState } from "react";
import gftoImage from "../assets/GTFO!.png";
import "../Home.css";
import { Link } from "react-router-dom";

function Change() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Need a Passport? Here's what to do!</h1>

      <div className="walkthrough-link">
        <p>
          <br></br>📋 <br></br>
          <a
            href="https://docs.google.com/document/d/1fJChW9EjYKIorDq2mtEj2GNmfdGDoBcHO4DErUGQQNw/edit?tab=t.0#heading=h.636p23r9m3xm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detailed passport application walkthrough
          </a>
        </p>
        <p>
          <br></br>📋 <br></br>
          <a
            href="https://docs.google.com/document/d/1BBO9E5pA5lFGO-oDSOKRcCvELDWGJQD6TJ2TE7G0WV0/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes from our 9/21 workshop
          </a>
        </p>
        <p>
          {" "}
          <br></br>📋 <br></br>
          <Link to="/gender-marker">
            Look at the gender marker change walkthrough here.
          </Link>
        </p>
      </div>
      <div className="change-cards-container">
        <div className="card card2">
          <div className="card-content">
            <div className="main-text">
              If you've gotten a passport before as an adult but you're changing
              your name or gender marker
            </div>
            , you'll need to fill out the
            <a href="https://eforms.state.gov/Forms/ds82_pdf.PDF">DS-82</a>
            If you want to use the form filler to fill it out online, use{" "}
            <a href="https://pptform.state.gov/PassportWizardMain.aspx">
              this link
            </a>
          </div>
          <div>
            Note that you CANNOT apply online if you are changing your name or
            gender marker.
          </div>
          <div className="card-arrow">↓</div>
        </div>

        <div className="card card3">
          <div className="card-content">
            Next, you'll need to gather your{" "}
            <strong>supporting documents</strong>:
            <ul>
              <li>
                Proof of U.S. citizenship (
                <a
                  href="https://docs.google.com/spreadsheets/d/1l3xQERijEXlgj_w8g6G62krdeLwqX2lpt09o35Sd3sI/edit?gid=857010838#gid=857010838"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  birth certificate
                </a>
                , passport, naturalization certificate, etc.)
              </li>
              <li>
                Photo identification (driver's license, military ID, etc.)
              </li>
              <li>Passport photo (2" x 2")</li>
              <li>Payment for fees</li>
              <li>supporting documents (see below)</li>
            </ul>
          </div>
          <div className="card-arrow">↓</div>
        </div>

        <div className="card card6">
          <div className="card-content">
            <strong>Additional documents some people might need:</strong>
            <ul>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1chrp-sViyX6zzisFwULIWmFz1EU_lF9_7htXBLpmHo0/edit?gid=246470848#gid=246470848">
                  Request marriage certificate
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1l3xQERijEXlgj_w8g6G62krdeLwqX2lpt09o35Sd3sI/edit?gid=857010838#gid=857010838"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request birth certificate
                </a>
              </li>
              <li>
                <a href="https://travel.state.gov/content/travel/en/passports/have-passport/change-correct.html">
                  Name change request
                </a>
              </li>
              <li>
                <a href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html">
                  Gender marker change request
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Change;
