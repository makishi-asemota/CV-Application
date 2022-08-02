import "./App.css";
import { useState } from "react";
import React, { Component } from "react";
import List from "./Components/App-list";
import FillForm from "./Components/form";

function App() {
  const [inputs, updateinputs] = useState([]);

  const addInput = (inputInfo) => {
    updateinputs([...inputs, inputInfo]);
  };

  return (
    <div className="App">
      <h2 className="main-header">CV Form</h2>
      <FillForm />
    </div>
  );
}

export default App;
