import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8" src={USER_ICON} alt="userIcon" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
