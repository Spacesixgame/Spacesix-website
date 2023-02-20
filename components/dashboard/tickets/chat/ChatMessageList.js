import React, { useEffect, useRef } from "react";
import ChatAdminMessage from "./ChatAdminMessage";
import styles from "./ChatMessageList.module.css";
import ChatUserMessage from "./ChatUserMessage";

const MessageList = ({ messageList }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef && messagesEndRef.current) {
      const element = messagesEndRef.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <ul className={styles.list} ref={messagesEndRef}>
      {messageList.map((message, index) => (
        <li className={styles.message} key={message.id}>
          {message.user ? (
            <ChatAdminMessage
              user={message.user}
              message={message.message}
              timestamp={message.timestamp}
            />
          ) : (
            <ChatUserMessage
              message={message.message}
              timestamp={message.timestamp}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
