import React, { useState, useEffect } from "react";
import axios from "axios";
import postData from "../api/apiService";
import moment from "moment";

const UpdateStudentDetails = () => {
  const [data, setData] = useState([]); // Student details fetched from the API
  const [selectedStudent, setSelectedStudent] = useState(null); // Selected student for update

  const [updatedDetails, setUpdatedDetails] = useState({
    // State for holding updated details
    name: "",
    age: "",
    // Add more fields as needed
  });

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await postData(formData);
        setData(response.data);
        if (response.data.length > 0) {
          setSelectedStudent(response.data[0]);
          setUpdatedDetails({
            name: response.data[0].name,
            age: response.data[0].age,
            // Add more fields as needed
          });
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  const handleStudentSelection = (student) => {
    setSelectedStudent(student);
    setUpdatedDetails({
      name: student.name,
      age: student.age,
      // Add more fields as needed
    });
  };
  const handleUpdateDetails = async () => {
    try {
      // Simulate updating data

      // Replace the following line with your actual API call for updating data

      await axios.put(
        `http://localhost:3000/api/students/${selectedStudent.id}`,
        updatedDetails
      );

      // Fetch updated student data after updating

      const response = await axios.get("http://localhost:3000/api/students");

      setData(response.data);
    } catch (error) {
      console.error("Error updating student details:", error);
    }
  };

  return (
    <div>
      <h2>Update Student Details</h2>

      <div>
        <label>Select Student: </label>

        <select
          value={selectedStudent ? selectedStudent.id : ""}
          onChange={(e) =>
            handleStudentSelection(
              data.find((student) => student.id === e.target.value)
            )
          }
        >
          {data.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      {selectedStudent && (
        <div>
          <h3>Update Details for {selectedStudent.name}</h3>

          <div>
            <label>Name: </label>

            <input type="text" value={updatedDetails.name} readOnly />
          </div>

          <div>
            <label>Age: </label>

            <input type="number" value={updatedDetails.age} readOnly />
          </div>

          {/* Add more input fields for other details as needed */}

          <button onClick={handleUpdateDetails}>Update Details</button>
        </div>
      )}
    </div>
  );
};

export default UpdateStudentDetails;
