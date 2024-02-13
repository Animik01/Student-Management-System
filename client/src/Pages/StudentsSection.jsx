import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import postData from "../api/apiService";
import moment from "moment";

export default function StudentsSection() {
  const [formData, setFormData] = useState({
    std_first_name: "",
    std_last_name: "",
    std_mobile: "",
    std_email: "",
    std_address: "",
    std_city: "",
    std_state: "",
    std_pincode: "",
    created_by: "Animik",
    created_dt: moment(new Date()).format("DD-MM-YYYY"),
    flag: "1",
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [error, seterror] = useState(null);
  const handleChange = (e) => {
    // console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      let res = await postData(formData);
      setSuccessMessage("Data submitted successfully!");
    } catch (error) {
      console.error("Error in form submission:", error);
      // Handle errors or show a user-friendly message
    }
  };
  const closealart = () => {
    seterror(null);
    setSuccessMessage(null);
    document.getElementById("myForm").reset();
  };

  return (
    <div>
      <Navbar />
      {/* {successMessage && <Alert variant="success">{successMessage}</Alert>} */}
      <div className="container mt-5">
        <form className="row g-3" id="myForm" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              name="std_first_name"
              autoComplete="off"
              // value={formData.std_first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="std_last_name"
              autoComplete="off"
              // value={formData.std_last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPassword4"
              name="std_mobile"
              // value={formData.std_mobile}
              onChange={handleChange}
              required
              maxLength={10}
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputPassword4"
              name="std_email"
              autoComplete="off"
              // value={formData.std_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="std_address"
              autoComplete="off"
              // value={formData.std_address}
              onChange={handleChange}
              placeholder="1234 Main St"
              required
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="std_city"
              autoComplete="off"
              // value={formData.std_city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select
              id="inputState"
              className="form-select"
              name="std_state"
              // value={formData.std_state}
              onChange={handleChange}
              required
            >
              <option selected>Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Pin Code
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="std_pincode"
              autoComplete="off"
              // value={formData.std_pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      {successMessage && (
        <div
          class="alert alert-success alart-dismissible d-flex justify-content-between w-25 z-3 position-absolute  rounded-3 mx-5"
          role="alert"
        >
          {successMessage}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
            onClick={closealart}
            style={{ color: "red" }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>
      )}
      <Footer />
    </div>
  );
}
