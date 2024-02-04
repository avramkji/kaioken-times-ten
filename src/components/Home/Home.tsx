import { useState, useEffect } from "kaioken"
import "./Home.css"

function Home() {
  const [name, setName] = useState('');
  const [enter, setEnter] = useState(false);
  const [messages, setMessages] = useState([
    { name: "John", message: "Hello, how are you?" },
    { name: "Jane", message: "I'm doing well, thanks!" },
    { name: "John", message: "That's great to hear!" },
  ]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (enter) {
      console.log('enter pressed')
    }
  }, [enter]);

  if (!enter) {
    return (
      <div className="h-full">
          <input
            className="border-blue-500 px-1 mx-1"
            placeholder="Enter your name"
            type="text"
            value={name}
            onkeydown={(e: any) => {
              // console.log('E key: ', e)
              // console.log('E value: ', e.target.value)
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
          <input
            className="border-blue-500 px-1 mx-1"
            placeholder="Enter your name"
            type="text"
            value={message}
            onkeypress={(e: any) => {
              if (e.key === 'Enter') {
                setMessages([...messages, { name: name, message: message }])
                setMessage('')
              }
              setMessage(e.target.value)
            }}            
          />
          <button 
            onclick={() => {
              setMessages([...messages, { name: name, message: message }])
              setMessage('')
            }}
            className="px-2 bg-blue-500 text-white mx-1"
          >Enter</button>
        </div>
      </div>
    );
  }

}

export default Home
