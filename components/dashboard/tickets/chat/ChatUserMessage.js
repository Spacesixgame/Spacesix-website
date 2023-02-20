import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./ChatUserMessage.module.css";

const ChatUserMessage = ({ message }) => {
  return (
    <>
      <div className={styles["user-message"]}>
        <p>{message}</p>
      </div>
      <ImageUI src={"userImage.png"} height="32" width="32" />
    </>
  );
};

export default ChatUserMessage;
