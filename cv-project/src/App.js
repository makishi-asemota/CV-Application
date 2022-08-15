import "./App.css";
import React, { Component } from "react";
import FillForm from "./Components/form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="main-header">CV Form</h2>
        <FillForm />
      </div>
    );
  }
}

export default App;
