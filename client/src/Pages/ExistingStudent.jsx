import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import postData from "../api/apiService";
import moment from "moment";

export default function ExistingStudent() {
  const [Data, setData] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loader, setLoader] = useState(true);

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
    flag: "0",
  });

  const FetchData = async () => {
    try {
      let Responce = await postData(formData);
      // setSuccessMessage('Data submitted successfully!')
      if (Responce != null) {
        setData(Responce.student_data);
      }
      // console.log("Responce", Responce.student_data);
    } catch (error) {
      console.error("Error in form submission:", error);
      // Handle errors or show a user-friendly message
    }
    setLoader(false);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const DeleteItem = async (index) => {
    console.log("Data", Data[index]);
    let query = {
      std_first_name: Data[index].std_first_name,
      std_last_name: "",
      std_mobile: "",
      std_email: "",
      std_address: "",
      std_city: "",
      std_state: "",
      std_pincode: "",
      created_by: "",
      created_dt: "",
      flag: "2",
    };
    try {
      let Responce = await postData(query);
      setSuccessMessage("Data Deleted successfully!");
      FetchData();
    } catch (error) {
      console.error("Error in form submission:", error);
      // Handle errors or show a user-friendly message
    }
  };

  const closealart = () => {
    setSuccessMessage(null);
    document.getElementById("myForm").reset();
  };

  return (
    <div>
      <Navbar />
      {loader == false ? (
        <>
          <div className="container mb-5">
            <div class="container-fluid ">
              <section id="minimal-statistics">
                <div class="row">
                  <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">Students Area</h4>
                    <p>Manage students and records</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <i class="icon-pencil primary font-large-2 float-left"></i>
                            </div>
                            <div class="media-body text-right">
                              <h3>{Data ? Data[0]?.v_count : 0}</h3>
                              <span>Number of total Students</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <i class="icon-speech warning font-large-2 float-left"></i>
                            </div>
                            <div class="media-body text-right">
                              <h3>156</h3>
                              <span>New Comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <i class="icon-graph success font-large-2 float-left"></i>
                            </div>
                            <div class="media-body text-right">
                              <h3>64.89 %</h3>
                              <span>Bounce Rate</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="align-self-center">
                              <i class="icon-pointer danger font-large-2 float-left"></i>
                            </div>
                            <div class="media-body text-right">
                              <h3>423</h3>
                              <span>Total Visits</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {Data && Data.length > 0 ? (
            <div className="container">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th className="col-md-2" scope="col">
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data &&
                    Data.length > 0 &&
                    Data.map((row, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{row.std_first_name + " " + row.std_last_name}</td>
                        <td>{row.std_email}</td>
                        <td>{row.std_mobile}</td>
                        <td>
                          <Link to={"/update-student"}>
                            <button type="button" class="btn btn-warning m-2">
                              Update
                            </button>
                          </Link>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => DeleteItem(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            "No Student Enolled"
          )}

          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <Link class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" href="#">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" href="#">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" href="#">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
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
        </>
      ) : (
        <div class="text-center pt-5">
          <div
            class="spinner-border"
            style={{ width: "3rem", height: "3rem",color:"blue" }}
            role="status"
          ></div>
        </div>
      )}
    </div>
  );
}
