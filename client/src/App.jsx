import { useState } from "react";
import "./App.css";
import socketIO from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatPage from "./components/Chat/ChatPage";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />}></Route>
      <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
    </Routes>
  );
}

export default App;
