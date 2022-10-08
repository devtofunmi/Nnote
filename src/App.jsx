import React from "react";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box w={"100%"} minH={"100vh"} backgroundColor="white" color={"black"}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
