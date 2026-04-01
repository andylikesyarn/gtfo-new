import "./GenderMarker.css";

const AIRPORTS = [
  { code: "ATL", name: "Hartsfield-Jackson Atlanta International", city: "Atlanta, GA", lat: 33.6407, lng: -84.4277 },
  { code: "ORD", name: "Chicago O'Hare International", city: "Chicago, IL", lat: 41.9742, lng: -87.9073 },
  { code: "CLE", name: "Cleveland Hopkins International", city: "Cleveland, OH", lat: 41.4117, lng: -81.8498 },
  { code: "IAH", name: "George Bush Intercontinental", city: "Houston, TX", lat: 29.9902, lng: -95.3368 },
  { code: "HOU", name: "William P. Hobby Airport", city: "Houston, TX", lat: 29.6454, lng: -95.2789 },
  { code: "JFK", name: "John F. Kennedy International", city: "New York, NY", lat: 40.6413, lng: -73.7781 },
  { code: "LGA", name: "LaGuardia Airport", city: "New York, NY", lat: 40.7769, lng: -73.8740 },
  { code: "MSY", name: "Louis Armstrong New Orleans International", city: "New Orleans, LA", lat: 29.9934, lng: -90.2580 },
  { code: "SJU", name: "Luis Muñoz Marín International", city: "San Juan, PR", lat: 18.4394, lng: -66.0018 },
  { code: "EWR", name: "Newark Liberty International", city: "Newark, NJ", lat: 40.6895, lng: -74.1745 },
  { code: "PHL", name: "Philadelphia International", city: "Philadelphia, PA", lat: 39.8729, lng: -75.2437 },
  { code: "PHX", name: "Phoenix Sky Harbor International", city: "Phoenix, AZ", lat: 33.4373, lng: -112.0078 },
  { code: "MEM", name: "Memphis International Airport", city: "Memphis, TN", lat: 35.0424, lng: -89.9767 },
];

const mapHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #map { height: 100%; width: 100%; }
    .leaflet-popup-content-wrapper {
      border-radius: 6px;
      font-family: sans-serif;
    }
    .popup-code {
      font-weight: 700;
      font-size: 1rem;
      color: #b00020;
    }
    .popup-name {
      font-size: 0.85rem;
      color: #222;
      margin: 2px 0;
    }
    .popup-city {
      font-size: 0.78rem;
      color: #666;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const airports = ${JSON.stringify(AIRPORTS)};
    const map = L.map('map', { zoomControl: true }).setView([37.5, -96], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);
    const icon = L.divIcon({
      className: '',
      html: '<div style="width:14px;height:14px;background:#b00020;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10],
    });
    airports.forEach(a => {
      L.marker([a.lat, a.lng], { icon })
        .addTo(map)
        .bindPopup(
          '<div class="popup-code">' + a.code + '</div>' +
          '<div class="popup-name">' + a.name + '</div>' +
          '<div class="popup-city">' + a.city + '</div>'
        );
    });
  </script>
</body>
</html>`;

export default function IceAirportMap() {
  return (
    <div className="page-container">
      <h1>ICE Deployment: Airport Map</h1>

      <div className="content-section">
        <div className="alert-box">
          <p>
            <strong className="datestamp">BREAKING — MARCH 24, 2026</strong>
            <br />
            On March 23, 2026, the Trump administration deployed hundreds of ICE
            agents to at least 14 U.S. airports, citing TSA staffing shortages
            caused by the ongoing partial DHS shutdown (in effect since February
            14, 2026). ICE agents are present at entrances, exits, and security
            lines. Officials confirm immigration enforcement remains active
            alongside their stated crowd-management role.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Confirmed Deployment Locations — March 23, 2026</h2>
        <p style={{ marginBottom: "1rem" }}>
          The following airports were confirmed by CNN via a DHS source and
          corroborated by on-the-ground reporting from the Associated Press and
          local news affiliates. DHS declined to release the full official list,
          citing "operational security." This list is subject to change.
        </p>

        <iframe
          srcDoc={mapHtml}
          title="ICE Airport Deployment Map"
          style={{
            width: "100%",
            height: "420px",
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: "8px",
            marginBottom: "1.25rem",
          }}
        />

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "rgba(3,69,105,0.08)" }}>
                <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", borderBottom: "2px solid rgba(0,0,0,0.1)", color: "#034569", fontWeight: 700 }}>Code</th>
                <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", borderBottom: "2px solid rgba(0,0,0,0.1)", color: "#034569", fontWeight: 700 }}>Airport</th>
                <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", borderBottom: "2px solid rgba(0,0,0,0.1)", color: "#034569", fontWeight: 700 }}>City</th>
              </tr>
            </thead>
            <tbody>
              {AIRPORTS.map((a, i) => (
                <tr key={a.code} style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent" }}>
                  <td style={{ padding: "0.55rem 0.75rem", borderBottom: "1px solid rgba(0,0,0,0.06)", fontWeight: 700, color: "#b00020" }}>{a.code}</td>
                  <td style={{ padding: "0.55rem 0.75rem", borderBottom: "1px solid rgba(0,0,0,0.06)", color: "#1a1a2e" }}>{a.name}</td>
                  <td style={{ padding: "0.55rem 0.75rem", borderBottom: "1px solid rgba(0,0,0,0.06)", color: "#444" }}>{a.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#666", marginTop: "0.6rem", fontStyle: "italic" }}>
          Sources:{" "}
          <a href="https://www.cnn.com/2026/03/24/us/ice-agents-airport-deployment-what-we-know" target="_blank" rel="noopener noreferrer">CNN</a>
          {", "}
          <a href="https://abc7chicago.com/post/ice-agents-deployed-ohare-airport-dhs-says-long-tsa-lines-continue/18755132/" target="_blank" rel="noopener noreferrer">ABC7 Chicago</a>
          {", "}
          <a href="https://abc7news.com/post/ice-agents-deploy-14-airports-nationwide-amid-tsa-callout-list-does-not-include-bay-area/18755318/" target="_blank" rel="noopener noreferrer">ABC7 San Francisco</a>
          {", "}
          <a href="https://www.aljazeera.com/news/2026/3/24/ice-agents-deployed-to-us-airports-which-airports-are-affected" target="_blank" rel="noopener noreferrer">Al Jazeera</a>
        </p>
      </div>

      <div className="content-section">
        <h2>What Is Happening and Why</h2>
        <p>
          DHS funding lapsed on February 14, 2026, leaving approximately 50,000
          TSA officers working without pay. By mid-March, TSA absences had
          reached a 12% rate — the highest since the shutdown began — causing
          multi-hour security lines at major airports. The Trump administration
          announced on March 22 that ICE agents, who received separate
          multi-year funding through last year's "One Big Beautiful Bill Act,"
          would be deployed to supplement TSA operations.
        </p>
        <br />
        <p>
          Border czar Tom Homan stated agents would handle crowd control,
          entrance and exit monitoring, and queue management — tasks that do not
          require TSA's specialized screening training. However, Homan also
          confirmed that immigration enforcement will continue as normal: "We do
          immigration enforcement at airports all the time. Is that going to
          change? It's not going to change."
        </p>
        <br />
        <p>
          President Trump stated separately that agents "love it, because
          they're able to arrest illegals as they come into the country," while
          also saying immigration arrests are "not why they're there." The dual
          framing has drawn criticism from civil rights organizations and local
          officials.
        </p>
      </div>

      <div className="content-section">
        <h2>What This Means for Trans Travelers</h2>
        <div className="update-box">
          <p>
            <strong>ICE agents will be conducting immigration enforcement
            alongside crowd management.</strong> For trans travelers — especially
            those with mismatched documents, expired passports, or X gender
            markers — the presence of armed ICE agents at checkpoints increases
            the risk of scrutiny, questioning, and potential detention.
          </p>
        </div>
        <ul>
          <li>
            ICE agents are not TSA — they are not bound by TSA's policy of not
            checking gender at the document podium. Their mandate includes
            immigration enforcement at all times.
          </li>
          <li>
            Trump has requested that ICE agents remove their masks while at
            airports, making them more visible but also potentially more
            confrontational.
          </li>
          <li>
            At least two people were arrested by federal agents at San Francisco
            International Airport on March 22 — the day before the mass
            deployment — demonstrating that enforcement is active.
          </li>
          <li>
            About 75 ICE agents per shift were deployed to Chicago O'Hare alone.
            However, reporting from ABC7 Chicago noted that none were visible
            near the main security checkpoints — they appeared to be stationed
            at entrances and exits.
          </li>
          <li>
            DHS has not released a full list and has indicated the deployment
            may expand. The list above should be treated as a floor, not a
            ceiling.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Your Rights If Stopped by ICE at an Airport</h2>
        <div className="tip-box">
          <p>
            <strong>You have the right to remain silent.</strong> You are not
            required to answer questions about your immigration status,
            citizenship, or travel history beyond providing identification. You
            may state: "I am exercising my right to remain silent" and "I want
            to speak with a lawyer."
          </p>
          <p className="update-source">Source: <a href="https://www.aclu.org/know-your-rights/what-do-i-do-if-im-stopped-by-the-police-at-the-airport" target="_blank" rel="noopener noreferrer">ACLU — Know Your Rights at the Airport</a></p>
        </div>
        <div className="tip-box">
          <p>
            <strong>Do not show documents beyond what is required for your
            flight.</strong> For domestic travel, a REAL ID-compliant driver's
            license or state ID is sufficient. You are not required to present
            a passport for domestic flights, and doing so may invite scrutiny
            of your gender marker or immigration records.
          </p>
          <p className="update-source">Source: <a href="https://transequality.org/documents/know-your-rights-passports" target="_blank" rel="noopener noreferrer">Advocates for Trans Equality</a></p>
        </div>
        <div className="tip-box">
          <p>
            <strong>If detained, you have the right to contact a lawyer.</strong>{" "}
            Save these numbers before you travel:
          </p>
          <ul>
            <li>
              <strong>Lambda Legal Help Desk:</strong>{" "}
              <a href="https://lambdalegal.org/helpdesk/" target="_blank" rel="noopener noreferrer">lambdalegal.org/helpdesk</a>
            </li>
            <li>
              <strong>ACLU National:</strong> 212-549-2500
            </li>
            <li>
              <strong>Immigration Equality Hotline:</strong>{" "}
              <a href="https://immigrationequality.org" target="_blank" rel="noopener noreferrer">immigrationequality.org</a>
            </li>
          </ul>
          <p className="update-source">Sources: Lambda Legal, ACLU, Immigration Equality</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Official Statements & Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.aclu.org/press-releases/aclu-statement-on-trump-administration-plans-to-deploy-ice-to-airport-security-lines" target="_blank" rel="noopener noreferrer">
              ACLU Statement on ICE Airport Deployment
            </a>
          </li>
          <li>
            <a href="https://www.cnn.com/2026/03/24/us/ice-agents-airport-deployment-what-we-know" target="_blank" rel="noopener noreferrer">
              CNN — ICE Airport Deployment: What We Know
            </a>
          </li>
          <li>
            <a href="https://www.npr.org/2026/03/22/g-s1-114745/ice-tsa-airports-deployment-homan" target="_blank" rel="noopener noreferrer">
              NPR — ICE Officers Set to Deploy to Airports
            </a>
          </li>
          <li>
            <a href="https://www.aljazeera.com/news/2026/3/24/ice-agents-deployed-to-us-airports-which-airports-are-affected" target="_blank" rel="noopener noreferrer">
              Al Jazeera — Which Airports Are Affected?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
