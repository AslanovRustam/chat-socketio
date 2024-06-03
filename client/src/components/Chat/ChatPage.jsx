import s from "./chat.module.css";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatPage = ({ socket }) => {
  return (
    <div className={s.chat}>
      <ChatBar />
      <div className={s.main}>
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
