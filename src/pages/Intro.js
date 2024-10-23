import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Intro.css";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const text = "여가거가?";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-text">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.3, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Intro;
