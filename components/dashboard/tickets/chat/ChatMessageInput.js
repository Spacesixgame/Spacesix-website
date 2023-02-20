import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import styles from "./ChatMessageInput.module.css";
import { IoIosSend } from "react-icons/io";
import { sendMesageInTicket } from "helpers/api-utils";

const ChatMessageInput = ({ ticketId, onUpdateMessageList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const messageRef = useRef("");

  const sendMessageHandler = () => {
    setIsLoading(true);
    sendMesageInTicket(ticketId, messageRef.current.value).then((res) => {
      messageRef.current.value = "";
      onUpdateMessageList();
      setIsLoading(false);
    });
  };

  const keyDownHandler = (e) => {
    if (e.code == "Enter") {
      sendMessageHandler();
    }
  };

  return (
    <InputGroup size="md" className={styles["input-group"]}>
      <Input
        pr="4.5rem"
        py="16px"
        type="text"
        placeholder="Write your message..."
        ref={messageRef}
        onKeyDown={keyDownHandler}
        disabled={isLoading}
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          onClick={sendMessageHandler}
          className={styles.action}
        >
          <IoIosSend className={styles.icon} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default ChatMessageInput;
