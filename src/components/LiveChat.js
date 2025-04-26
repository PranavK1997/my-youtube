import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomMessages,
  generateRandomNames,
} from "../utils/liveChatHelper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[500px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 border-x border-b border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Pranav",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="relative w-96">
          <input
            className="w-full px-2 pr-16 border border-black"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 bg-green-200 border-l border-black"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
