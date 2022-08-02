import React from "react";
import { useState } from "react";

function FillForm({ addInput }) {
  const [state, setState] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    major: "",
    gradDate: "",
    companyName: "",
    position: "",
    tasks: "",
    date: "",
    unitlDate: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addInput(state);
    setState({
      userName: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      major: "",
      gradDate: "",
      companyName: "",
      position: "",
      tasks: "",
      date: "",
      unitlDate: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="userName">Enter Name: </label>
          <input
            type="text"
            onChange={handleChange}
            id="userName"
            name="userName"
            value={state.userName}
          />

          <label htmlFor="email">Enter email: </label>
          <input
            type="email"
            onChange={handleChange}
            id="email"
            name="email"
            value={state.email}
          />

          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="tel"
            onChange={handleChange}
            id="phoneNumber"
            name="phoneNumber"
            value={state.phoneNumber}
          />
        </fieldset>

        <fieldset>
          <legend>Educational Experience</legend>
          <label htmlFor="schoolName">University Name: </label>
          <input
            type="text"
            onChange={handleChange}
            id="schoolName"
            name="schoolName"
            value={state.schoolName}
          />

          <label htmlFor="major">Title of major: </label>
          <input
            type="text"
            onChange={handleChange}
            id="major"
            name="major"
            value={state.major}
          />

          <label htmlFor="gradDate">Date Graduated: </label>
          <input
            type="date"
            onChange={handleChange}
            id="gradDate"
            name="gradDate"
            value={state.gradDate}
          />
        </fieldset>

        <fieldset>
          <legend>Work Experience</legend>
          <label htmlFor="companyName">Enter Company Name: </label>
          <input
            type="text"
            onChange={handleChange}
            id="companyName"
            name="companyName"
            value={state.companyName}
          />

          <label htmlFor="position">Position Title: </label>
          <input
            type="text"
            onChange={handleChange}
            id="position"
            name="position"
            value={state.position}
          />

          <label htmlFor="tasks">Main tasks for position: </label>
          <textarea
            type="text"
            onChange={handleChange}
            id="tasks"
            name="tasks"
            value={state.tasks}
          />

          <label htmlFor="date">Start date: </label>
          <input
            type="date"
            onChange={handleChange}
            id="date"
            name="date"
            value={state.date}
          />

          <label htmlFor="untilDate">End date: </label>
          <input
            type="date"
            onChange={handleChange}
            id="untilDate"
            name="untilDate"
            value={state.unitlDate}
          />
        </fieldset>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default FillForm({ addInput });
