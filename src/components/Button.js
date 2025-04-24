import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="flex px-4 py-2 m-2 rounded-xl bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
