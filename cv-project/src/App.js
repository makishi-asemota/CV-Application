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
    this.onChange = this.onChange.bind(this);
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
              onChange={this.onChange}
              id="userName"
              name="userName"
            />

            <label htmlFor="email">Enter email: </label>
            <input
              type="email"
              onChange={this.onChange}
              id="email"
              name="email"
            />

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="tel"
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
              onChange={this.onChange}
              id="schoolName"
              name="schoolName"
            />

            <label htmlFor="major">Title of major: </label>
            <input
              type="text"
              onChange={this.onChange}
              id="major"
              name="major"
            />

            <label htmlFor="gradDate">Date Graduated: </label>
            <input
              type="date"
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
              onChange={this.onChange}
              id="companyName"
              name="companyName"
            />

            <label htmlFor="position">Position Title: </label>
            <input
              type="text"
              onChange={this.onChange}
              id="position"
              name="position"
            />

            <label htmlFor="tasks">Main tasks for position: </label>
            <textarea
              type="text"
              onChange={this.onChange}
              id="tasks"
              name="tasks"
            />

            <label htmlFor="date">Start date: </label>
            <input type="date" onChange={this.onChange} id="date" name="date" />

            <label htmlFor="untilDate">End date: </label>
            <input
              type="date"
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
