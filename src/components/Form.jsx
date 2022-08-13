import React, { useState } from "react";
import "./../Styles/form.css";

function Form() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    role: "",
    user_recommend: "",
    mostLike: "",
    prefer: [],
    comment: "",
  });
  const handleChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    let check = JSON.parse(localStorage.getItem("session")) || [];
    const index = check.findIndex((element) => {
      if (element.email === userData.email) {
        return true;
      }
      return false;
    });
    if (index !== -1) {
      alert("User already exists");
    } else {
      SaveDataToLocalStorage(userData);
      alert("Data inserted successfuly");
      setUserData({
        name: "",
        email: "",
        age: "",
        role: "",
        user_recommend: "",
        mostLike: "",
        prefer: [],
        comment: "",
      });
    }
  };
  const SaveDataToLocalStorage = (data) => {
    let info = [];
    info = JSON.parse(localStorage.getItem("session")) || [];
    info.push(data);
    localStorage.setItem("session", JSON.stringify(info));
  };
  return (
    <div className="container">
      <header className="header">
        <h1 id="title" className="text-center">
          freeCodeCamp Survey Form
        </h1>
        <p id="description" className="description text-center">
          Thank you for taking the time to help us improve the platform
        </p>
      </header>
      <div className="form" id="survey-form">
        <div className="form-group">
          <label id="name-label" for="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={handleChange}
            value={userData.name}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label id="email-label" for="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={handleChange}
            value={userData.email}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="form-group">
          <label id="number-label" for="number">
            Age<span className="clue">(optional)</span>
          </label>
          <input
            type="number"
            name="age"
            id="number"
            min="10"
            max="99"
            className="form-control"
            onChange={handleChange}
            value={userData.age}
            placeholder="Age"
          />
        </div>
        <div className="form-group">
          <p>Which option best describes your current role?</p>
          <select
            id="dropdown"
            name="role"
            className="form-control"
            onChange={handleChange}
            value={userData.role}
            required
          >
            <option disabled selected value>
              Select current role
            </option>
            <option value="student">Student</option>
            <option value="job">Full Time Job</option>
            <option value="learner">Full Time Learner</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <p>Would you recommend freeCodeCamp to a friend?</p>
          <label>
            <input
              name="user_recommend"
              value="definitely"
              type="radio"
              className="input-radio"
              onChange={handleChange}
              checked
            />
            Definitely
          </label>
          <label>
            <input
              name="user_recommend"
              value="maybe"
              type="radio"
              onChange={handleChange}
              className="input-radio"
            />
            Maybe
          </label>

          <label>
            <input
              name="user_recommend"
              value="not-sure"
              type="radio"
              onChange={handleChange}
              className="input-radio"
            />
            Not sure
          </label>
        </div>

        <div className="form-group">
          <p>What is your favorite feature of freeCodeCamp?</p>
          <select
            id="most-like"
            name="mostLike"
            className="form-control"
            onChange={handleChange}
            value={userData.mostLike}
            required
          >
            <option disabled selected value>
              Select an option
            </option>
            <option value="challenges">Challenges</option>
            <option value="projects">Projects</option>
            <option value="community">Community</option>
            <option value="openSource">Open Source</option>
          </select>
        </div>

        <div className="form-group">
          <p>
            What would you like to see improved?
            <span className="clue">(Check all that apply)</span>
          </p>

          <label>
            <input
              name="prefer"
              value="front-end-projects"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Front-end Projects
          </label>
          <label>
            <input
              name="prefer"
              value="back-end-projects"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Back-end Projects
          </label>
          <label>
            <input
              name="prefer"
              value="data-visualization"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Data Visualization
          </label>
          <label>
            <input
              name="prefer"
              value="challenges"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Challenges
          </label>
          <label>
            <input
              name="prefer"
              value="open-source-community"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Open Source Community
          </label>
          <label>
            <input
              name="prefer"
              value="gitter-help-rooms"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Gitter help rooms
          </label>
          <label>
            <input
              name="prefer"
              value="videos"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Videos
          </label>
          <label>
            <input
              name="prefer"
              value="city-meetups"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            City Meetups
          </label>
          <label>
            <input
              name="prefer"
              value="wiki"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Wiki
          </label>
          <label>
            <input
              name="prefer"
              value="forum"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Forum
          </label>
          <label>
            <input
              name="prefer"
              value="additional-courses"
              type="checkbox"
              onChange={handleChange}
              className="input-checkbox"
            />
            Additional Courses
          </label>
        </div>

        <div className="form-group">
          <p>Any comments or suggestions?</p>
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            onChange={handleChange}
            value={userData.comment}
            placeholder="Enter your comment here..."
          ></textarea>
        </div>

        <div className="form-group">
          <button
            type="submit"
            id="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
