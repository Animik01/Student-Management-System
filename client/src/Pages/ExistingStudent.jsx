import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import postData from "../api/apiService";
import moment from "moment";
import UpdateStudent from "../Pages/UpdateStudent";

export default function ExistingStudent() {
  const [Data, setData] = useState([]);

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

  useEffect(() => {
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
    };
    FetchData();
  }, []);

  return (
    <div>
      <Navbar />
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
                      <button type="button" class="btn btn-danger">
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
      <Footer />
    </div>
  );
}
