import React, { useState, useEffect } from "react";
import s from "./chat.module.css";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);
  return (
    <div className={s.sidebar}>
      <h2>Open Chat</h2>
      <div>
        <h4 className={s.header}>ACTIVE USERS</h4>
        <div className={s.users}>
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
