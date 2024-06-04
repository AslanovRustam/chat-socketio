import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import s from "./chat.module.css";

const ChatBody = ({ messages, lastMessageRef, typingStatus }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className={s.mainHeader}>
        <p>Hangout with Friends</p>
        <Button
          text="LEAVE CHAT"
          style="leaveChatBtn"
          onClickBtn={handleLeaveChat}
        />
        {/* <button className={s.leaveChatBtn} onClick={handleLeaveChat}>
          LEAVE CHAT
        </button> */}
      </header>

      <div className={s.messageContainer}>
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className={s.messageChats} key={message.id}>
              <p className={s.senderName}>You</p>
              <div className={s.messageSender}>
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className={s.messageChats} key={message.id}>
              <p>{message.name}</p>
              <div className={s.messageRecipient}>
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className={s.messageStatus}>
          <p>{typingStatus}</p>
          <div ref={lastMessageRef} />
        </div>
      </div>
    </>
  );
};

export default ChatBody;
