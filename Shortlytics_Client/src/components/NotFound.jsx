import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to the homepage or a default route
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.text}>
        The URL you're trying to access doesn't exist or is no longer available.
      </p>
      <button onClick={handleGoHome} style={styles.button}>
        Go Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2.5rem",
    color: "#ff4d4d",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
    margin: "20px 0",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default NotFound;
