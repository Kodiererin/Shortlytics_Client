import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center p-8 bg-white shadow-2xl rounded-lg transform transition-all duration-500 hover:scale-105">
        <motion.h1
          className="text-4xl font-extrabold text-black mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Shortlytics
        </motion.h1>
        <motion.p
          className="text-lg text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Easily shorten your URLs and track analytics
        </motion.p>
        <Link
          to="/shortUrl"
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-6 rounded-md text-xl font-semibold hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Create a Short URL
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
