import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./CustomModal.module.css";
import { IoCloseOutline } from "react-icons/io5";

const CustomModal = ({ children, className, cancelButton }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={styles["modal-openner"]} onClick={handleShow}>
        {children.button}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className={styles.modal}
        dialogClassName={styles.dialog + " " + className}
      >
        <Modal.Header className={styles.header}>
          <Button className={styles["close-btn"]} onClick={handleClose}>
            <IoCloseOutline className={styles.icon} />
          </Button>
          <Modal.Title>{children.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>{children.body}</Modal.Body>
        <Modal.Footer>
          {cancelButton && (
            <Button onClick={handleClose} className={styles.cancel}>
              Close
            </Button>
          )}
          {children.footer}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
