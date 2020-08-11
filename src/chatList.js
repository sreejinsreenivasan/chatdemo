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
      onClick: () => triggerFunction(getItem(chatTree, trigger)),
      className:
        "font-semibold inline-block py-1 px-2 rounded-full text-white bg-indigo-400 last:mr-0 mr-1"
    },
    content
  );
  return newElement;
};

const getItem = (array, id) => array.find((e) => e.id === id);

export default function ChatList() {
  const [chat, setChat] = useState([]);
  console.log(chat);

  const addNewChat = (response) => {
    const newArray = [...chat];
    newArray.splice(newArray.length + 1, 0, createChat(response, addNewChat));
    setChat(newArray);
  };

  React.useEffect(() => {
    console.log("mounted");

    setChat([...chat, createChat(initializeChat(chatTree), addNewChat)]);
  }, []);

  return (
    <div className="h-full bg-indigo-100 px-2 py-6" style={{ minHeight: 370 }}>
      {chat.map((e) => (
        <div key={e.key} className="my-3">
          {e}
        </div>
      ))}
    </div>
  );
}
