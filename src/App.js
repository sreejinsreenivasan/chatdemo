import React from "react";
import "./styles.css";
import SendMessage from "./sendMessage";

export default function App() {
  return (
    <div
      className="absolute bottom-0 right-0 bg-gray-200 m-4 rounded-lg p-1"
      style={{
        height: 600,
        width: 300
      }}
    >
      <div className="w-full p-2">Chat Bot</div>
      <div className="p-2">
        <div className="overflow-x-auto h-full flex flex-col">
          <SendMessage />
        </div>
      </div>
    </div>
  );
}
