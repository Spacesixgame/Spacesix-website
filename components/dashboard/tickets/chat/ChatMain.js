import { useRouter } from "next/router";
import styles from "./ChatMain.module.css";
import MessageList from "./ChatMessageList";
import React, { useEffect, useState } from "react";
import { getTicketByID } from "helpers/api-utils";
import ChatMessageInput from "./ChatMessageInput";

const ChatMain = () => {
  const router = useRouter();
  const { id } = router.query;

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (id) {
      getMessageList();
    }
  }, [id]);

  const getMessageList = () => {
    getTicketByID(id).then((res) => {
      setMessageList(res.conversation);
    });
  };

  return (
    <div className={styles.main}>
      <MessageList messageList={messageList} />
      <ChatMessageInput ticketId={id} onUpdateMessageList={getMessageList} />
    </div>
  );
};

export default ChatMain;
