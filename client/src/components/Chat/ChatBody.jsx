import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./chat.module.css";

const ChatBody = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className={s.mainHeader}>
        <p>Hangout with Colleagues</p>
        <button className={s.leaveChatBtn} onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      <div className={s.messageContainer}>
        <div className={s.messageChats}>
          <p className={s.senderName}>You</p>
          <div className={s.messageSender}>
            <p>Hello there</p>
          </div>
        </div>

        {/*This shows messages received by you*/}
        <div className={s.messageChats}>
          <p>Other</p>
          <div className={s.messageRecipient}>
            <p>Hey, I'm good, you?</p>
          </div>
        </div>

        {/*This is triggered when a user is typing*/}
        <div className={s.messageStatus}>
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
