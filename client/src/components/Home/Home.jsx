import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import s from "./home.module.css";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    //sends the username and socket ID to the Node.js server
    console.log(socket.id);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };
  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <h2 className={s.header}>Sign in to Open Chat</h2>
      <label htmlFor="username">User name</label>
      <Input
        value={userName}
        setValue={setUserName}
        placeHolder={"type your name..."}
      />
      <Button text="SIGN IN" style="btn" type="submit" />
    </form>
  );
};

export default Home;
