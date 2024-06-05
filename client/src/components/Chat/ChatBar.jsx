import React, { useState, useEffect } from "react";
import s from "./chat.module.css";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    console.log(123);
    socket.on("newUserResponse", (data) => {
      console.log("data ChatBar", data);
      setUsers(data);
    });
  }, [socket, users]);

  return (
    <div className={s.sidebar}>
      <h2 className={s.title}>Open Chat</h2>
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
