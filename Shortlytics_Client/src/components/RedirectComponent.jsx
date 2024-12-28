import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectComponent = () => {
  const { shortUrl } = useParams(); // `shortUrl` is the dynamic part of the URL
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        console.log("Fetching URL for:", shortUrl);
        // Make a request to the backend with the shortened URL
        const response = await axios.get(`http://localhost:8080/${shortUrl}`, {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: (status) => status < 500, // Prevent throwing on 404
        });

        // Set the response data for debugging
        setResponseData(response.data);

        // Check the response status
        if (response.status === 200) {
          const redirectUrl = response.data; // Get the original URL from the response body
          if (redirectUrl) {
            console.log("Redirecting to:", redirectUrl);
            window.location.href = redirectUrl; // Perform the redirect
          } else {
            console.error("Redirection URL not found in response.");
          }
        } else if (response.status === 404) {
          console.error("Shortened URL not found");
          navigate("/not-found"); // Navigate to a custom 404 page if not found
        } else {
          console.error("Unexpected response", response);
        }
      } catch (error) {
        console.error("Error fetching the original URL", error);
      }
    };

    fetchOriginalUrl();
  }, [shortUrl, navigate]);

  return (
    <div>
      <p>Redirecting...</p>
      {responseData && (
        <div>
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RedirectComponent;
