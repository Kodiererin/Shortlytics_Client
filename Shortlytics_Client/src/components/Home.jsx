import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to Shortlytics
        </h1>
        <Link to="/shortUrl" className="text-lg text-blue-500 hover:underline">
          Create a Short URL
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
