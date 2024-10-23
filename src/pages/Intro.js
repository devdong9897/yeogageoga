// Intro.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Intro.css";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
      <motion.h1
        className="intro-text"
        initial={{ opacity: 0, y: 50 }} // 초기 상태: 투명도 0, Y축으로 50px 아래 위치
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }} // 애니메이션 상태: 투명도 1, Y축 0
        transition={{ duration: 1, ease: "easeOut" }} // 애니메이션 시간: 1초
      >
        여가거가?
      </motion.h1>
    </div>
  );
};

export default Intro;
