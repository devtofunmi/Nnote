import React from "react";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Favorite from "./pages/Favorite";
import Task from "./pages/Task";
function App() {
  return (
    <>
      <Box w={"100%"} minH={"100vh"} bg={"#181819"} color={"black"}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/task" element={<Task />} />
            <Route path="/dashboard/favorite" element={<Favorite />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
