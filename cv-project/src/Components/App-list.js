import React from "react";
import FillForm from "./form";

const Input = (props) => {
  const { tasks } = props;

  return (
    <div>
      {tasks.map((task) => (
        <div className="card" key={task.id}>
          <p>{task.userName}</p>
          <p>{task.email}</p>
          <p>{task.phoneNumber}</p>
          <p>{task.schoolName}</p>
          <p>{task.major}</p>
          <p>{task.gradDate}</p>
          <p>{task.companyName}</p>
          <p>{task.position}</p>
          <p>{task.tasks}</p>
          <p>{task.date}</p>
          <p>{task.untilDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Input;
