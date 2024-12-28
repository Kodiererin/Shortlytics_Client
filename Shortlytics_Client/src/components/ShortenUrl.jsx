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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-xl rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center animate-fadeIn">Shorten Your URL</h1>
        <input
          type="text"
          value={oldUrl}
          onChange={(e) => setOldUrl(e.target.value)}
          placeholder="Enter your URL here"
          className="border border-gray-300 p-3 w-full rounded-md mb-4 transition-transform duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-md text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-700"
        >
          Shorten URL
        </button>
      </form>

      {shortenedUrl && (
        <div className="mt-6 p-4 bg-white shadow-xl rounded-lg animate-fadeInUp">
          <p className="text-lg font-medium text-gray-800">Your shortened URL:</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline font-semibold"
          >
            {shortenedUrl}
          </a>
        </div>
      )}

      {error && (
        <div className="mt-6 text-red-500 font-medium animate-fadeInUp">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ShortenUrl;
