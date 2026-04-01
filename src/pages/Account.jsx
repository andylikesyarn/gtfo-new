import { useState, useEffect } from "react";
import Viajero from "./Viajero";
import "./GenderMarker.css";

const TOKEN_KEY = "gtfo-account-token";

export default function Account() {
  const [status, setStatus] = useState("checking"); // checking | login | authenticated | error
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (!token) {
      setStatus("login");
      return;
    }
    fetch("/.netlify/functions/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) {
          setStatus("authenticated");
        } else {
          sessionStorage.removeItem(TOKEN_KEY);
          setStatus("login");
        }
      })
      .catch(() => {
        // If verify fails (e.g. local dev without Netlify), fall back to login
        sessionStorage.removeItem(TOKEN_KEY);
        setStatus("login");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/.netlify/functions/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        sessionStorage.setItem(TOKEN_KEY, data.token);
        setStatus("authenticated");
      } else {
        setErrorMsg(data.error || "Incorrect password.");
      }
    } catch {
      setErrorMsg("Could not reach the server. Please try again.");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setPassword("");
    setStatus("login");
  };

  if (status === "checking") {
    return (
      <div className="page-container" style={{ textAlign: "center", paddingTop: "4rem" }}>
        <p style={{ color: "#666" }}>Checking credentials…</p>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "0.5rem 1rem" }}>
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#888",
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Log out
          </button>
        </div>
        <Viajero />
      </div>
    );
  }

  return (
    <div className="page-container" style={{ maxWidth: 420 }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Account</h1>
      <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.95rem" }}>
        This area is password protected.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#888",
              marginBottom: "0.4rem",
            }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            required
            style={{
              width: "100%",
              padding: "0.6rem 0.8rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "inherit",
              fontSize: "1rem",
              fontFamily: "inherit",
              outline: "none",
            }}
          />
        </div>
        {errorMsg && (
          <p style={{ color: "#c46060", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
            {errorMsg}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="help-button"
          style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? "Checking…" : "Enter"}
        </button>
      </form>
    </div>
  );
}
