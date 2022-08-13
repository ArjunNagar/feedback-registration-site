import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/form.css";

function Login() {
  const [inputField, setInputField] = useState({
    user_name: "",
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
      if (
        element.email === inputField.email &&
        element.user_password === inputField.user_password
      ) {
        console.log(
          element.email,
          inputField.email,
          element.user_password,
          inputField.user_password
        );
        return true;
      }
      return false;
    });
    console.log(index);
    if (index !== -1) {
      // alert("Login Successful");
      navigate("/form");
    } else {
      alert("invalid username or password");
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">User Login</h1>
      <div className="form">
        <input
          type="text"
          className="form-control"
          name="user_name"
          onChange={inputsHandler}
          placeholder="Enter First Name"
          value={inputField.first_name}
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
          className="form-control"
          name="user_password"
          onChange={inputsHandler}
          placeholder="Enter Password"
          value={inputField.user_password}
        />
        <br />
        <button className="submit-button" onClick={submitButton}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
