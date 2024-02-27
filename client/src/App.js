import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UpdateStudent from "./Pages/UpdateStudent";
import StudentsSection from "./Pages/StudentsSection";
import ExistingStudent from "./Pages/ExistingStudent";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check local storage for login status
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
    sessionStorage.setItem("username", user);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/update-student/:index"
            element={
              isLoggedIn ? <UpdateStudent /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/new-students-area"
            element={
              isLoggedIn ? (
                <StudentsSection />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/existing-students-area"
            element={
              isLoggedIn ? (
                <ExistingStudent />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
