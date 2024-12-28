import React from "react";
import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-4xl w-full">
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Learn More About Shortlytics
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Shortlytics helps you shorten long URLs and track their performance with insightful analytics.
          Its fast, easy, and offers multiple features to make managing your URLs simple.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Shorten URLs Instantly</h3>
            <p className="text-gray-600">
              Shorten any long URL into a compact, easy-to-share link with just a few clicks. Make your links clean and professional.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Track Performance</h3>
            <p className="text-gray-600">
              Get real-time analytics on how your shortened URLs are performing. View click rates, geographic data, and more.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Customize Your Links</h3>
            <p className="text-gray-600">
              Personalize your shortened URLs to make them memorable and on-brand. Customize the URL ending for a unique touch.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Simple and Secure</h3>
            <p className="text-gray-600">
              Shortlytics ensures that your links are secure and your data is protected, all while providing an intuitive interface.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <a
            href="/"
            className="inline-block px-8 py-4 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Go Back Home
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LearnMore;
