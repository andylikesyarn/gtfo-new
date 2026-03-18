import { useState, useEffect } from "react";
import "./Workshops.css";

// Simple iCal parser for events
const parseICalData = (icalText) => {
  const events = [];
  const lines = icalText.split("\n");
  let currentEvent = null;

  // Helper function to extract Luma event ID from UID
  const extractLumaEventId = (event) => {
    if (event.uid && event.uid.includes("@lu.ma")) {
      const match = event.uid.match(/evt-([a-zA-Z0-9]+)@/);
      if (match) return match[1];
    }
    return null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "BEGIN:VEVENT") {
      currentEvent = {};
    } else if (line === "END:VEVENT" && currentEvent) {
      // Try to construct the Luma URL if we don't have one
      if (!currentEvent.url) {
        const eventId = extractLumaEventId(currentEvent);
        if (eventId) {
          currentEvent.url = `https://lu.ma/${eventId}`;
        }
      }

      // Only include future events
      if (currentEvent.startDate && new Date(currentEvent.startDate) > new Date()) {
        events.push(currentEvent);
      }
      currentEvent = null;
    } else if (currentEvent && line.includes(":")) {
      const [key, ...valueParts] = line.split(":");
      const value = valueParts.join(":");
      const baseKey = key.split(";")[0];

      switch (baseKey) {
        case "UID":
          currentEvent.uid = value.trim();
          break;
        case "SUMMARY":
          currentEvent.title = value;
          break;
        case "DESCRIPTION":
          // Clean up description and remove URLs/hosting messages
          let cleanDescription = value
            .replace(/\\\\n/g, "\n")
            .replace(/\\\\,/g, ",")
            .replace(/\\\\;/g, ";")
            .replace(/You are hosting this event[^\n]*/gi, "")
            .replace(/View the public page at https:\/\/lu[^\n]*/gi, "")
            .replace(/https:\/\/[^\s]*/gi, "") // Remove all URLs
            .trim();
          
          currentEvent.description = cleanDescription;
          break;
        case "DTSTART":
          if (value.includes("T")) {
            const cleanValue = value
              .replace(/TZID=[^:]*:/, "")
              .replace("VALUE=DATE-TIME:", "");

            const year = cleanValue.slice(0, 4);
            const month = cleanValue.slice(4, 6);
            const day = cleanValue.slice(6, 8);
            const hour = cleanValue.slice(9, 11);
            const minute = cleanValue.slice(11, 13);

            // Parse as UTC if ends with Z, otherwise as local time
            const timeString = cleanValue.endsWith("Z")
              ? `${year}-${month}-${day}T${hour}:${minute}:00Z`
              : `${year}-${month}-${day}T${hour}:${minute}:00`;
            
            currentEvent.startDate = new Date(timeString);
          }
          break;
        case "LOCATION":
          // Clean location and remove URLs
          let cleanLocation = value.trim().replace(/https?:\/\/[^\s]*/gi, "");
          currentEvent.location = cleanLocation;
          break;
        case "URL":
          currentEvent.url = value.trim();
          break;
      }
    }
  }

  return events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
};

// Format date for display
const formatDate = (date) => {
  const localDate = new Date(date);
  
  return {
    month: localDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: localDate.getDate().toString().padStart(2, "0"),
    time: localDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    fullDate: localDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};

function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        setLoading(true);
        const proxyUrl = "https://api.allorigins.win/raw?url=";
        const icalUrl = "https://api2.luma.com/ics/get?entity=user&id=icssk-cF3YvqpU8DJ8V4D";

        const response = await fetch(proxyUrl + encodeURIComponent(icalUrl));
        if (!response.ok) {
          throw new Error("Failed to fetch workshop data");
        }

        const icalText = await response.text();
        const parsedEvents = parseICalData(icalText);
        setWorkshops(parsedEvents);
        setError(null);
      } catch (err) {
        console.error("Error fetching workshops:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
    const interval = setInterval(fetchWorkshops, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="workshops-page">
        <div className="workshops-header">
          <h1>Upcoming Workshops</h1>
          <p className="workshops-subtitle">Loading workshop information...</p>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="workshops-page">
        <div className="workshops-header">
          <h1>Upcoming Workshops</h1>
          <p className="workshops-subtitle">
            Join us for virtual passport application workshops
          </p>
        </div>
        <div className="error-container">
          <p>
            Unable to load workshop data. Please check our{" "}
            <a href="https://luma.com/gtfo" target="_blank" rel="noopener noreferrer">
              Luma calendar
            </a>{" "}
            for the latest workshop information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="workshops-page">
      <div className="workshops-header">
        <h1>Upcoming Workshops</h1>
        <p className="workshops-subtitle">
          Join us for virtual passport application workshops
        </p>
      </div>

      <div className="workshops-container">
        {workshops.length > 0 ? (
          workshops.map((workshop, index) => {
            const dateInfo = formatDate(workshop.startDate);
            return (
              <div key={index} className="workshop-card">
                <div className="workshop-date">
                  <span className="month">{dateInfo.month}</span>
                  <span className="day">{dateInfo.day}</span>
                </div>
                <div className="workshop-details">
                  <h3>{workshop.title || "Virtual Passport Workshop"}</h3>
                  <p className="workshop-time">
                    {dateInfo.fullDate} at {dateInfo.time}
                  </p>
                  <p className="workshop-location">
                    {workshop.location || "Virtual (Google Meet link provided thru email)"}
                  </p>
                  {workshop.description && (
                    <p className="workshop-description">
                      {workshop.description.length > 200
                        ? workshop.description.substring(0, 200) + "..."
                        : workshop.description}
                    </p>
                  )}
                  <div className="workshop-actions">
                    <a
                      href={workshop.url || "https://luma.com/gtfo"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="register-button"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-workshops">
            <div className="workshop-card">
              <div className="workshop-date">
                <span className="month">TBD</span>
                <span className="day">--</span>
              </div>
              <div className="workshop-details">
                <h3>Virtual Passport Workshop</h3>
                <p className="workshop-time">Next workshop date coming soon</p>
                <p className="workshop-location">
                  Virtual (Google Meet link provided thru email)
                </p>
                <p className="workshop-description">
                  A comprehensive virtual workshop covering all aspects of
                  passport applications, renewals, and corrections.
                </p>
                <div className="workshop-actions">
                  <a
                    href="https://luma.com/gtfo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-button"
                  >
                    View Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="past-workshops">
        <h2>Past Workshops</h2>
        <div className="past-workshop-item">
          <h3>September 21, 2024 - Passport Application Workshop</h3>
          <p>
            📋{" "}
            <a
              href="https://docs.google.com/document/d/1BBO9E5pA5lFGO-oDSOKRcCvELDWGJQD6TJ2TE7G0WV0/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              View notes and resources from this workshop
            </a>
          </p>
        </div>
      </div>

      <div className="contact-section">
        <h2>Questions?</h2>
        <p>
          If you have questions about upcoming workshops or would like to
          suggest a workshop topic, feel free to reach out through our{" "}
          <a href="/about">About page</a>.
        </p>
      </div>
    </div>
  );
}

export default Workshops;
