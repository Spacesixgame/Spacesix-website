import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./ChatAdminMessage.module.css";

const ChatAdminMessage = ({ message, user, timestamp }) => {
  return (
    <>
      <ImageUI src={"userImage.png"} height="32" width="32" />
      <div className={styles["admin-message"]}>
        <p>{user.fullname}</p>
        <p>{message}</p>
      </div>
    </>
  );
};

export default ChatAdminMessage;
