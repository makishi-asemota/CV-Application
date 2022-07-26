import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import List from "./Components/App-list";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: {
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
        id: uniqid(),
      },
      inputs: [],
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      inputs: this.state.inputs.concat(this.state.input),
      input: {
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
        id: uniqid(),
      },
    });
  };

  render() {
    const { input, inputs } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="userName">Enter Name: </label>
            <input
              type="text"
              value={input.userName}
              onChange={this.onChange}
              id="userName"
              name="userName"
            />

            <label htmlFor="email">Enter email: </label>
            <input
              type="email"
              value={input.email}
              onChange={this.onChange}
              id="email"
              name="email"
            />

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="tel"
              value={input.phoneNumber}
              onChange={this.onChange}
              id="phoneNumber"
              name="phoneNumber"
            />
          </fieldset>

          <fieldset>
            <legend>Educational Experience</legend>
            <label htmlFor="schoolName">University Name: </label>
            <input
              type="text"
              value={input.schoolName}
              onChange={this.onChange}
              id="schoolName"
              name="schoolName"
            />

            <label htmlFor="major">Title of major: </label>
            <input
              type="text"
              value={input.major}
              onChange={this.onChange}
              id="major"
              name="major"
            />

            <label htmlFor="gradDate">Date Graduated: </label>
            <input
              type="text"
              value={input.gradDate}
              onChange={this.onChange}
              id="gradDate"
              name="gradDate"
            />
          </fieldset>

          <fieldset>
            <legend>Work Experience</legend>
            <label htmlFor="companyName">Enter Company Name: </label>
            <input
              type="text"
              value={input.companyName}
              onChange={this.onChange}
              id="companyName"
              name="companyName"
            />

            <label htmlFor="position">Position Title: </label>
            <input
              type="text"
              value={input.position}
              onChange={this.onChange}
              id="position"
              name="position"
            />

            <label htmlFor="tasks">Main tasks for position: </label>
            <textarea
              type="text"
              value={input.tasks}
              onChange={this.onChange}
              id="tasks"
              name="tasks"
            />

            <label htmlFor="date">Start date: </label>
            <input
              type="date"
              value={input.date}
              onChange={this.onChange}
              id="date"
              name="date"
            />

            <label htmlFor="untilDate">End date: </label>
            <input
              type="date"
              value={input.unitlDate}
              onChange={this.onChange}
              id="untilDate"
              name="untilDate"
            />
          </fieldset>
          <button type="submit">Submit Form</button>
        </form>
        <List inputs={inputs} />
      </div>
    );
  }
}

export default App;
