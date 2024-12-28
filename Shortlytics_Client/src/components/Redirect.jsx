import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
  const { shortenedUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRedirectUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/${shortenedUrl}`);
        const redirectUrl = response.data; // Backend should now return the original URL directly in the response body
        window.location.href = redirectUrl; // Redirect to the original URL
      } catch (error) {
        alert("Shortened URL not found or failed to redirect.");
        navigate("/"); // Navigate back to the homepage if error occurs
      }
    };
    fetchRedirectUrl();
  }, [shortenedUrl, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-xl font-semibold">Redirecting...</p>
      </div>
    </div>
  );
};

export default Redirect;
