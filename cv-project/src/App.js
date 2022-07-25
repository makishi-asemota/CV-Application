import "./App.css";
import React, { Component } from "react";

class App extends Component {
  // constructor() {
  //   super();

  state = {
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
    untilDate: "",
    inputs: [],
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      inputs: this.state.inputs.concat(this.state.input),
    });
  };

  render() {
    const {
      userName,
      email,
      phoneNumber,
      schoolName,
      major,
      gradDate,
      companyName,
      position,
      tasks,
      date,
      untilDate,
    } = this.state;

    return (
      <div>
        <form>
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="userName">Enter Name: </label>
            <input
              type="text"
              value={userName}
              onChange={this.onChange}
              name="userName"
            />

            <label htmlFor="email">Enter email: </label>
            <input
              type="email"
              value={email}
              onChange={this.onChange}
              name="email"
            />

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={this.onChange}
              name="phoneNumber"
            />
          </fieldset>

          <fieldset>
            <legend>Educational Experience</legend>
            <label htmlFor="schoolName">University Name: </label>
            <input
              type="text"
              value={schoolName}
              onChange={this.onChange}
              name="schoolName"
            />

            <label htmlFor="major">Title of major: </label>
            <input
              type="text"
              value={major}
              onChange={this.onChange}
              name="major"
            />

            <label htmlFor="gradDate">Date Graduated: </label>
            <input
              type="text"
              value={gradDate}
              onChange={this.onChange}
              name="gradDate"
            />
          </fieldset>

          <fieldset>
            <legend>Work Experience</legend>
            <label htmlFor="companyName">Enter Company Name: </label>
            <input
              type="text"
              value={companyName}
              onChange={this.onChange}
              name="companyName"
            />

            <label htmlFor="position">Position Title: </label>
            <input
              type="text"
              value={position}
              onChange={this.onChange}
              name="position"
            />

            <label htmlFor="tasks">Main tasks for position: </label>
            <textarea
              type="text"
              value={tasks}
              onChange={this.onChange}
              name="tasks"
            />

            <label htmlFor="date">Start date: </label>
            <input
              type="date"
              value={date}
              onChange={this.onChange}
              name="date"
            />

            <label htmlFor="untilDate">End date: </label>
            <input
              type="date"
              value={untilDate}
              onChange={this.onChange}
              name="untilDate"
            />
          </fieldset>
        </form>
      </div>
    );
  }

  // };
}

export default App;
