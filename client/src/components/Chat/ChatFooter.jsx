import React, { useState } from "react";
import s from "./chat.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  return (
    <div className={s.footer}>
      <form className="form" onSubmit={handleSendMessage}>
        <Input
          value={message}
          setValue={setMessage}
          placeHolder="Write message"
          onKeyDown={handleTyping}
        />

        <Button text="SEND" style="sendBtn" type="submit" />
      </form>
    </div>
  );
};

export default ChatFooter;
