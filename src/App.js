import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import SightseeingPage from "./pages/SightseeingPage";
import EventPage from "./pages/EventPage";
import Intro from "./pages/Intro";
const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true); 

  useEffect(() => {
    // 3초 후 인트로 종료
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer); // 타이머 정리
  }, []);

  return (
    <div>
      {showIntro ? ( // 인트로가 끝나지 않았으면 인트로 표시
        <Intro />
      ) : ( // 인트로가 끝나면 메인 페이지로 이동
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/sightseeing" element={<SightseeingPage />} />
            <Route path="/event" element={<EventPage />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
