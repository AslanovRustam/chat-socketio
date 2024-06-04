import socketIO from "socket.io-client";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatPage from "./components/Chat/ChatPage";
import "./App.css";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
