import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../Images/img3.png";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    sessionStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home">
            <img src={img} alt="image" className="" width="85" height="70" />
          </Link>

          <Link className="navbar-brand" to="/">
            Student Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link mx-2" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-2" to="/add-Student">
                  Add Student
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-2" href="#">
                  Attendence
                </Link>
              </li>
              <li class="nav-item"></li>
            </ul>
            <button className="btn btn-outline-primary mx-3">
              <Link class="nav-link" onClick={handleLogout} to="/login">
                Log Out
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
