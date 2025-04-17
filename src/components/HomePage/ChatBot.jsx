import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { FaCommentDots } from "react-icons/fa";
import "../../App.css"

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await addDoc(collection(db, "chats"), {
      text: input,
      timestamp: new Date(),
      sender: "client",
    });
    setInput("");
  };

  return (
    <div>
      <button className="chat-button" onClick={() => setOpen(!open)}>
        <FaCommentDots size={30} />
      </button>
      {open && (
        <div className="chat-popup">
          <div className="chat-header">Live Chat</div>
          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-msg ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
