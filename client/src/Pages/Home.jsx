import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-2">
        <div className="card">
          <div className="card-body">
            The Student Management System represents an indispensable solution
            that can offer seamless integration to the institutions. A school or
            an institution conducts plenty of tasks or processes that require
            active monitoring or checking. For example, the tasks from different
            ends are mentioned below:
          </div>
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-sm-6 shadow-sm p-3 mb-5 bg-white rounded">
              <Link to="/new-students-area" className="text-decoration-none">
                <div className="card p-5" style={{ color: "black" }}>
                  <div className="card-body">
                    <h5 className="card-title">New Student Registration</h5>
                    <p className="card-text">
                      Student-related tasks involve managing exam fees,
                      certificates, roll numbers, report cards, etc.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 shadow-sm p-3 mb-5 bg-white rounded">
              <Link
                to="/Existing-students-area"
                className="text-decoration-none"
              >
                <div className="card p-5" style={{ color: "black" }}>
                  <div className="card-body">
                    <h5 className="card-title">Existing Students Details</h5>
                    <p className="card-text">
                      Teacher-related tasks involve creating or managing exam
                      papers, parent-teacher meeting reports.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
