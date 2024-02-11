import { useState, useEffect } from "kaioken"
import "./Home.css"

export function Home() {
  const [name, setName] = useState('');
  const [enter, setEnter] = useState(false);
  const [messages, setMessages] = useState([
    { name: "John", message: "Hello, how are you?" },
    { name: "Jane", message: "I'm doing well, thanks!" },
    { name: "John", message: "That's great to hear!" },
  ]);
  const [message, setMessage] = useState('');

  if (!enter) {
    return (
      <div className="h-full">
          <input
            className="border-blue-500 px-1 mx-1"
            placeholder="Enter name"
            type="text"
            value={name}
            onkeydown={(e: any) => {
              if (e.key === 'Enter') {
                setEnter(true);
                setName(e.target.value);
              }
            }}
          />
          <button 
            onclick={() => setEnter(true)}
            className="px-2 bg-blue-500 text-white mx-1"
          >Enter</button>
      </div>
    );
  } else {
    return (
      <div className="h-full w-full">
        <h1>Hello, {name}!</h1>
        <hr />
        <div className="chat-container">
        {messages.map((message) => {
          return (
            <div className={`chat-message ${message.name === name ? "sender-me" : "sender-them"}`}>
              <p className="sender-name">{message.name}</p>
              <p className="sender-text">{message.message}</p>
            </div>
          )
        })}
        </div>
        <div className="h-full">
          <form
            onsubmit={(e: any) => {
              e.preventDefault();
              setMessages([...messages, { name: name, message: message }])
              setMessage('')
            }}
          >
            <input
              className="border-blue-500 px-1 mx-1"
              placeholder="Enter your message"
              type="text"
              value={message}
              oninput={(e: any) => {
                setMessage(e.target.value)
              }}     
            />
            <button
              className="px-2 bg-blue-500 text-white mx-1"
            >Enter</button>
          </form>
        </div>
      </div>
    );
  }

}
