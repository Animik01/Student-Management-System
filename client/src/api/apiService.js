import axios from "axios";

const apiUrl = "http://localhost:8080/api/data";

const postData = async (formData) => {
  try {
    const response = await axios.post(apiUrl, formData);
    console.log("Data inserted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};

export default postData;
