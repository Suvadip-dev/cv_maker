import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import Login from "./pages/login";
import Home from "./pages/home";
import CVEditor from "./pages/cv-editor"; // add your CV creation component

function App() {
  // const isAuthenticated = useIsAuthenticated();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cv-editor"
          element={<CVEditor />}
        />
      </Routes>
    </Router>
  );
}

export default App;
