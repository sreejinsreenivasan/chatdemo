import React, { useState } from "react";
import { chatTree } from "./chatTree";

const initializeChat = (array) => {
  return array[0];
};

const createChat = (payload, triggerFunction) => {
  const { type, trigger, content } = payload;
  const newElement = React.createElement(
    type,
    {
      key: Math.random(),
      id: Math.random(),
      onClick: () =>
        trigger !== false ? triggerFunction(getItem(chatTree, trigger)) : null,
      className:
        type === "ul"
          ? "my-2 p-1"
          : "font-semibold inline-block py-1 px-2 rounded-full text-white bg-indigo-400 last:mr-0 mr-1"
    },
    type === "ul"
      ? payload.elements.map((e) =>
          React.createElement(
            "li",
            {
              className:
                "font-semibold inline-block py-1 px-2 rounded-full text-white bg-indigo-400 last:mr-0 mr-1"
            },
            e.name
          )
        )
      : content
  );
  return newElement;
};

const getItem = (array, id) => array.find((e) => e.id === id);

export default function ChatList() {
  const [chat, setChat] = useState([]);

  const addNewChat = (response) => {
    const element = createChat(response, addNewChat);
    setChat((chat) => [...chat, element]);
  };

  React.useEffect(() => {
    console.log("mounted");

    setChat((chat) => [
      ...chat,
      createChat(initializeChat(chatTree), addNewChat)
    ]);
    return () => {
      console.log("un d");
    };
  }, []);

  return (
    <div
      className="h-full bg-indigo-100 px-2 py-6 overflow-auto"
      style={{ height: 370 }}
    >
      {chat.map((e) => (
        <div key={e.key} className="my-3">
          {e}
        </div>
      ))}
    </div>
  );
}
