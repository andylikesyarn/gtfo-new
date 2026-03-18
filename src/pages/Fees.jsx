import { useState } from "react";
import gftoImage from "../assets/GTFO!.png";
import "../Home.css";
import "./Fees.css";

function Fees() {
  return (
    <>
      <div className="header-image">
        <img src={gftoImage} alt="GFTO" className="gfto-logo" />
      </div>
      <h1>Passport Fees</h1>

      <div className="fees-container">
        <div className="fees-table-wrapper">
          <table className="fees-table">
            <thead>
              <tr>
                <th>Passport Type</th>
                <th>Application Fee</th>
                <th>Execution (Acceptance) Fee</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Passport Book</td>
                <td>$130</td>
                <td>$35</td>
                <td className="total-cost">$165</td>
              </tr>
              <tr>
                <td>Passport Card</td>
                <td>$30</td>
                <td>$35</td>
                <td className="total-cost">$65</td>
              </tr>
              <tr>
                <td>Passport Book & Card (Combo)</td>
                <td>$160</td>
                <td>$35</td>
                <td className="total-cost">$195</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="photo-info-section">
          <div className="photo-costs">
            <h3>Passport Photo Costs</h3>
            <p>
              In addition to the application fees above, you'll need passport
              photos. Professional passport photos at major retailers like CVS
              cost $17.99 for two printed photos, while Walgreens charges $16.99
              for two printed photos with a free digital copy. If you print your
              own photos using a 4x6 template, costs can be as low as
              $0.30-$0.42 per print. Post office locations typically charge
              $12-$15 for two passport photos (including taking the photos and
              printing them for you), making them a more budget-friendly option
              than major pharmacy chains.
            </p>
          </div>

          <div className="photo-requirements">
            <h3>Passport Photo Requirements & DIY Options</h3>
            <p>
              U.S. passport photos must be 2x2 inches, taken within the last 6
              months, in color, with a plain white background, and show your
              head, neck, and top of chest clearly. You can take your own
              digital passport photo at home if it meets all official
              requirements, potentially saving significant money. To ensure
              compliance, consider using professional digital services like{" "}
              <a
                href="https://photoaid.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PhotoAiD
              </a>{" "}
              or{" "}
              <a
                href="https://visafoto.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visafoto
              </a>
              , which use AI technology to verify your photos meet all
              government standards and offer money-back guarantees if rejected.
            </p>
          </div>
        </div>

        <div className="fees-note">
          <p>
            <strong>Note:</strong> These fees are current as of 19 Sept 2025.
            Please check the official U.S. State Department website for the most
            up-to-date fee information.
          </p>
        </div>
      </div>
    </>
  );
}

export default Fees;
