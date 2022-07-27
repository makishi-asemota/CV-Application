import React from "react";

const List = (props) => {
  const { inputs } = props;

  return (
    <div>
      {inputs.map((input) => (
        <div className="card" key={input.id}>
          <p>{input.userName}</p>
          <p>{input.email}</p>
          <p>{input.phoneNumber}</p>
          <p>{input.schoolName}</p>
          <p>{input.major}</p>
          <p>{input.gradDate}</p>
          <p>{input.companyName}</p>
          <p>{input.position}</p>
          <p>{input.tasks}</p>
          <p>{input.date}</p>
          <p>{input.untilDate}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
