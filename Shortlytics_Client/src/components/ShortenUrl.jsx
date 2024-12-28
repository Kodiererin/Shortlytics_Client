import React, { useState } from "react";
import axios from "axios";

const ShortenUrl = () => {
  const [oldUrl, setOldUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/shortUrl?oldUrl=${oldUrl}`);
      console.log(response); // Log the response object from the backend

      if (response.status === 200) {
        // Extract newUrl from response.data
        const { newUrl } = response.data;
        setShortenedUrl(newUrl); // Update state with the shortened URL
        setError(""); // Clear any previous errors
      }
    } catch (error) {
      // Handle cases when the request to the backend fails
      setError("Failed to shorten URL. Please check if the backend is running and try again.");
      setShortenedUrl(""); // Clear the shortened URL on error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Shorten Your URL</h1>
        <input
          type="text"
          value={oldUrl}
          onChange={(e) => setOldUrl(e.target.value)}
          placeholder="Enter your URL here"
          className="border border-gray-300 p-2 w-full rounded-md mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Shorten URL
        </button>
      </form>

      {shortenedUrl && (
        <div className="mt-4">
          <p className="text-lg">Your shortened URL:</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {shortenedUrl}
          </a>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ShortenUrl;
