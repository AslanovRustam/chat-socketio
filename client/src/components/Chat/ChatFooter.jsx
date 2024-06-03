import React, { useState } from "react";
import s from "./chat.module.css";

const ChatFooter = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };
  return (
    <div className={s.footer}>
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className={s.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={s.sendBtn}>SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
