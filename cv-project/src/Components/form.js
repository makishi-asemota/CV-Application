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
      showForm: false,
      editing: false,
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
            <div className="block">
              <label htmlFor="userName">Name: </label>
              <input
                type="text"
                onChange={this.handleChange}
                id="userName"
                name="userName"
                value={this.state.userName}
              />
            </div>

            <div className="block">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                onChange={this.handleChange}
                id="email"
                name="email"
                value={this.state.email}
              />
            </div>

            <div className="block">
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input
                type="tel"
                onChange={this.handleChange}
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Educational Experience</legend>
            <div className="block">
              <label htmlFor="schoolName">University Name: </label>
              <input
                type="text"
                onChange={this.handleChange}
                id="schoolName"
                name="schoolName"
                value={this.state.schoolName}
              />
            </div>

            <div className="block">
              <label htmlFor="major">Title of major: </label>
              <input
                type="text"
                onChange={this.handleChange}
                id="major"
                name="major"
                value={this.state.major}
              />
            </div>

            <div className="block">
              <label htmlFor="gradDate">Date Graduated: </label>
              <input
                type="date"
                onChange={this.handleChange}
                id="gradDate"
                name="gradDate"
                value={this.state.gradDate}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Work Experience</legend>
            <div className="block">
              <label htmlFor="companyName">Enter Company Name: </label>
              <input
                type="text"
                onChange={this.handleChange}
                id="companyName"
                name="companyName"
                value={this.state.companyName}
              />
            </div>

            <div className="block">
              <label htmlFor="position">Position Title: </label>
              <input
                type="text"
                onChange={this.handleChange}
                id="position"
                name="position"
                value={this.state.position}
              />
            </div>

            <div className="block">
              <label htmlFor="tasks">Main tasks for position: </label>
              <textarea
                type="text"
                onChange={this.handleChange}
                id="Maintasks"
                name="Maintasks"
                value={this.state.Maintasks}
              />
            </div>

            <div className="block">
              <label htmlFor="date">Start date: </label>
              <input
                type="date"
                onChange={this.handleChange}
                id="date"
                name="date"
                value={this.state.date}
              />
            </div>
          </fieldset>
          <button type="submit">Submit Form</button>
        </form>

        {/* Checks if showForm is set to true after submit is clicked, also checks if edit button is clicked in order to edit input fields */}

        {this.state.showForm === true && (
          <form>
            <div>
              <label htmlFor="userName">Name: </label>
              {this.state.editing ? (
                <input
                  name="userName"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.userName}
                />
              ) : (
                <span>{this.state.userName}</span>
              )}
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              {this.state.editing ? (
                <input
                  name="email"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.email}
                />
              ) : (
                <span>{this.state.email}</span>
              )}
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone number: </label>
              {this.state.editing ? (
                <input
                  name="phoneNumber"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.phoneNumber}
                />
              ) : (
                <span>{this.state.phoneNumber}</span>
              )}
            </div>

            <div>
              <label htmlFor="schoolName">School Name: </label>
              {this.state.editing ? (
                <input
                  name="schoolName"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.schoolName}
                />
              ) : (
                <span>{this.state.schoolName}</span>
              )}
            </div>

            <div>
              <label htmlFor="major">Major: </label>
              {this.state.editing ? (
                <input
                  name="major"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.major}
                />
              ) : (
                <span>{this.state.major}</span>
              )}
            </div>

            <div>
              <label htmlFor="gradDate">Graduation Date: </label>
              {this.state.editing ? (
                <input
                  name="gradDate"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.gradDate}
                />
              ) : (
                <span>{this.state.gradDate}</span>
              )}
            </div>

            <div>
              <label htmlFor="companyName">Company Name: </label>
              {this.state.editing ? (
                <input
                  name="companyName"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.companyName}
                />
              ) : (
                <span>{this.state.companyName}</span>
              )}
            </div>

            <div>
              <label htmlFor="position">Position: </label>
              {this.state.editing ? (
                <input
                  name="position"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.position}
                />
              ) : (
                <span>{this.state.position}</span>
              )}
            </div>

            <div>
              <label htmlFor="Maintasks">Current tasks: </label>
              {this.state.editing ? (
                <input
                  name="Maintasks"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.Maintasks}
                />
              ) : (
                <span>{this.state.Maintasks}</span>
              )}
            </div>

            <div>
              <label htmlFor="date">Start Date: </label>
              {this.state.editing ? (
                <input
                  name="date"
                  onChange={(event) =>
                    this.setState({ [event.target.name]: event.target.value })
                  }
                  value={this.state.date}
                />
              ) : (
                <span>{this.state.date}</span>
              )}
            </div>

            {this.state.editing ? (
              <button
                type="button"
                onClick={() => this.setState({ editing: false })}
              >
                Click to Save
              </button>
            ) : (
              <button
                type="button"
                onClick={() => this.setState({ editing: true })}
              >
                Click to Edit
              </button>
            )}
          </form>
        )}
      </div>
    );
  }
}
