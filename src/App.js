import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import SightseeingPage from "./pages/SightseeingPage";
import EventPage from "./pages/EventPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/sightseeing" element={<SightseeingPage />} />
          <Route path="/event" element={<EventPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
