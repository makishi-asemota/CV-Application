import React, { Component } from "react";
//import Input from "./App-list";

export default class FillForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      major: "",
      gradDate: "",
      companyName: "",
      position: "",
      Maintasks: "",
      date: "",
      unitlDate: "",
      showForm: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      showForm: true,
    });

    console.log("form submitted");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="userName">Enter Name: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="userName"
              name="userName"
              value={this.state.userName}
            />

            <label htmlFor="email">Enter email: </label>
            <input
              type="email"
              onChange={this.handleChange}
              id="email"
              name="email"
              value={this.state.email}
            />

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="tel"
              onChange={this.handleChange}
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
            />
          </fieldset>

          <fieldset>
            <legend>Educational Experience</legend>
            <label htmlFor="schoolName">University Name: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="schoolName"
              name="schoolName"
              value={this.state.schoolName}
            />

            <label htmlFor="major">Title of major: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="major"
              name="major"
              value={this.state.major}
            />

            <label htmlFor="gradDate">Date Graduated: </label>
            <input
              type="date"
              onChange={this.handleChange}
              id="gradDate"
              name="gradDate"
              value={this.state.gradDate}
            />
          </fieldset>

          <fieldset>
            <legend>Work Experience</legend>
            <label htmlFor="companyName">Enter Company Name: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="companyName"
              name="companyName"
              value={this.state.companyName}
            />

            <label htmlFor="position">Position Title: </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="position"
              name="position"
              value={this.state.position}
            />

            <label htmlFor="tasks">Main tasks for position: </label>
            <textarea
              type="text"
              onChange={this.handleChange}
              id="Maintasks"
              name="Maintasks"
              value={this.state.tasks}
            />

            <label htmlFor="date">Start date: </label>
            <input
              type="date"
              onChange={this.handleChange}
              id="date"
              name="date"
              value={this.state.date}
            />

            <label htmlFor="untilDate">End date: </label>
            <input
              type="date"
              onChange={this.handleChange}
              id="untilDate"
              name="untilDate"
              value={this.state.unitlDate}
            />
          </fieldset>
          <button type="submit">Submit Form</button>
        </form>
        {this.state.showForm === true && (
          <div>
            <p>{this.state.userName}</p>
            <p>{this.state.email}</p>
            <p>{this.state.phoneNumber}</p>
            <p>{this.state.schoolName}</p>
            <p>{this.state.major}</p>
            <p>{this.state.gradDate}</p>
            <p>{this.state.companyName}</p>
            <p>{this.state.position}</p>
            <p>{this.state.tasks}</p>
            <p>{this.state.date}</p>
            <p>{this.state.untilDate}</p>
          </div>
        )}
      </div>
    );
  }
}
