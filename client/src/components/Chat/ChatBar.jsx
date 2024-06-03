import React from "react";
import s from "./chat.module.css";

const ChatBar = () => {
  return (
    <div className={s.sidebar}>
      <h2>Open Chat</h2>

      <div>
        <h4 className={s.header}>ACTIVE USERS</h4>
        <div className={s.users}>
          <p>User 1</p>
          <p>User 2</p>
          <p>User 3</p>
          <p>User 4</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
