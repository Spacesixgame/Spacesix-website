import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";
import styles from "./style.module.css";

const TicketChat = () => {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatMain />
    </div>
  );
};

export default TicketChat;
