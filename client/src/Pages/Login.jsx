/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Page.css";
import img from "../Images/img2.webp";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="body p-5">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-12 mx-auto">
            <div className="card border-0 shadow rounded-3  flex-row">
              <img
                src={img}
                className="d-none d-sm-none d-md-block rounded card-img-left example-card-img-responsive"
                alt="image"
              />
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-20 fs-5">
                  Sign In
                </h5>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      for="rememberPasswordCheck"
                    >
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <Link
                      to={"/home"}
                      className="text-decoration-none btn btn-primary btn-login text-uppercase fw-bold"
                    >
                      Sign in
                    </Link>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <button className="btn-google" type="submit">
                      {" "}
                      Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button className="btn-facebook" type="submit">
                      Sign in with Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
