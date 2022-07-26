import React from "react";

const List = (props) => {
  const { inputs } = props;

  return inputs.map((input) => {
    return (
      <div className="card">
        <p key={input.id}>
          `${input.id}: `{input.text}
        </p>
      </div>
    );
  });
};

export default List;
