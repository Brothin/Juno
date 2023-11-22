import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Monitoring from "./Components/Monitoring";
import NotFound from "./Components/NotFound";
import SideBar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/" element={<Monitoring />} />
          <Route
            path="/overview"
            element={<Container heading={"Overview"} />}
          />
          <Route
            path="/onboarding"
            element={<Container heading={"Onboarding"} />}
          />
          <Route
            path="/flagging"
            element={<Container heading={"Flagging"} />}
          />
          <Route
            path="/sourceofincome"
            element={<Container heading={"Source of Income"} />}
          />
          <Route path="/uar" element={<Container heading={"UAR"} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

const Container = ({ heading }) => {
  return (
    <div className="empty-container">
      <h1>{heading}</h1>
    </div>
  );
};

export default App;
