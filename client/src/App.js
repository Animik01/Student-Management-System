import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UpdateStudent from "./Pages/UpdateStudent";
import StudentsSection from "./Pages/StudentsSection";
import ExistingStudent from "./Pages/ExistingStudent";

function App(props) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update-student/:index" element={<UpdateStudent />} />
          <Route path="/new-students-area" element={<StudentsSection />} />
          <Route path="/existing-students-area" element={<ExistingStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
