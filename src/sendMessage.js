import React from "react";

function SendMessage() {
  const nodeRef = React.createRef();
  const [elements, addElements] = React.useState([]);
  const [message, setMessage] = React.useState({ text: "" });
  const handleChange = (e) =>
    setMessage({ ...message, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    addElements([...elements, makeElement("p", message.text)]);
  };
  const makeElement = (type, payload) =>
    React.createElement(
      type,
      {
        key: Math.random(),
        onClick: () => console.log("I was clicked.."),
        className:
          "font-semibold inline-block py-1 px-2 rounded-full text-white bg-indigo-400 last:mr-0 mr-1"
      },
      payload
    );
  return (
    <>
      <div
        ref={nodeRef}
        className="bg-white rounded-lg p-3"
        style={{ minHeight: 370 }}
      >
        {elements.map((e) => (
          <div key={Math.random()} className="my-3">
            {e}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="w-5/10 ">
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              placeholder="type your message"
              type="text"
              name="text"
              value={message.text}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/10 p-2">
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-send"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SendMessage;
