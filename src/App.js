import React from "react";
import "./styles.css";
import SendMessage from "./sendMessage";
import ChatList from "./chatList";

export default function App() {
  return (
    <div
      className="absolute bottom-0 right-0 rounded-lg border-solid border-2 border-gray-600"
      style={{
        width: 350
      }}
    >
      <div className="p-2">
        <div className="flex flex-col">
          <ChatList />
        </div>
      </div>
    </div>
  );
}
