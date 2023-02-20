import { Button, Heading } from "@chakra-ui/react";
import CustomModal from "components/ui/CustomModal";
import { createTicket } from "helpers/api-utils";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
// import { AiOutlineDisconnect } from "react-icons/ai";
// import { useDispatch } from "react-redux";
import styles from "./NewTicket.module.css";
import NewTicketForm from "./NewTicketForm";

function NewTicketAction({ onUpdateTicketList }) {
  const createTicketHandler = () => {
    if (!title.current.value || !message.current.value) {
      toast.error("Data Can`t be empty");
      return;
    }
    createTicket(title.current.value, message.current.value)
      .then((res) => {
        title.current.value = "";
        message.current.value = "";
        onUpdateTicketList();
        toast.success("Ticket sended succesfuly !");
      })
      .catch((err) => {
        toast.error("Somthing was wrong !");
      });
  };

  const title = useRef("");
  const message = useRef("");

  return (
    <div className="d-flex justify-content-end">
      <CustomModal className={styles.modal} cancelButton>
        {{
          button: (
            <>
              <p className={"primary-btn text-dark " + styles["new-button"]}>
                New Ticket
              </p>
            </>
          ),
          header: (
            <Heading className={styles["header"]} as="h5" size="md">
              Send New Ticket
            </Heading>
          ),

          body: (
            <>
              <NewTicketForm title={title} message={message} />
            </>
          ),
          footer: (
            <Button
              className="primary-btn text-dark"
              onClick={createTicketHandler}
            >
              Send
            </Button>
          ),
        }}
      </CustomModal>
    </div>
  );
}

export default NewTicketAction;
