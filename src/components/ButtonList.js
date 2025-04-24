import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "News",
  "Live",
  "Music",
  "Cooking",
  "Valentines",
  "Cricket",
  "Soccer",
  "Javascript",
  "AI",
  "SystemDesign",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
