import "./../Styles/form.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_password: "",
  });
  const navigate = useNavigate();
  const inputsHandler = (e) => {
    setInputField((inputField) => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
  };
  const submitButton = () => {
    let check = JSON.parse(localStorage.getItem("session")) || [];
    const index = check.findIndex((element) => {
      if (element.email === inputField.email) {
        return true;
      }
      return false;
    });
    if (index !== -1) {
      alert("User allready exist");
    } else {
      if (inputField.first_name && inputField.last_name && inputField.email) {
        SaveDataToLocalStorage(inputField);
        alert("data inserted successfuly");
        setInputField({
          first_name: "",
          last_name: "",
          email: "",
          user_password: "",
        });
      } else {
        alert("Please fill data");
      }
    }
  };
  // data store in local storage
  const SaveDataToLocalStorage = (data) => {
    var a = [];
    a = JSON.parse(localStorage.getItem("session")) || [];
    a.push(data);
    localStorage.setItem("session", JSON.stringify(a));
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="form">
        <h1 className="text-center">Registration Form</h1>
        <input
          type="text"
          className="form-control"
          name="first_name"
          onChange={inputsHandler}
          placeholder="Enter First Name"
          value={inputField.first_name}
        />
        <br />
        <input
          type="text"
          className="form-control"
          name="last_name"
          onChange={inputsHandler}
          placeholder="Enter Last Name"
          value={inputField.last_name}
        />
        <br />
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={inputsHandler}
          placeholder="Enter email"
          value={inputField.email}
        />
        <br />
        <input
          type="password"
          name="user_password"
          className="form-control"
          onChange={inputsHandler}
          placeholder="Enter password"
          value={inputField.user_password}
        />
        <br />
        <button onClick={submitButton} className="submit-button">
          Sign Up
        </button>
        <p className="clue text-center">
          Already have an account? Click{" "}
          <button className="redirect-login" onClick={navigateToLogin}>
            here
          </button>
          to login.
        </p>
      </div>
    </div>
  );
}
export default Registration;
