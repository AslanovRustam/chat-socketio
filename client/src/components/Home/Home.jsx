import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/chat");
  };
  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <h2 className={s.container}>Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className={s.usernameInput}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className={s.cta}>SIGN IN</button>
    </form>
  );
};

export default Home;
