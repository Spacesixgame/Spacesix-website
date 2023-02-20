import React, { Fragment, useState } from "react";
import styles from "./ConnectWallet.module.css";
import Modal from "react-bootstrap/Modal";
import ProviderList from "./ProviderList";
import { GrFormClose } from "react-icons/gr";

function ConnectWallet() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <button className="border-btn py-2 px-3" size="lg" onClick={handleShow}>
        Connect Wallet
      </button>

      <Modal
        dialogClassName={styles["web3-modal__dialog"]}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>
            Connect to a wallet
            <button
              className={styles["modal__close-btn"]}
              onClick={handleClose}
            >
              <GrFormClose className={styles.icon} />
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProviderList />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default ConnectWallet;
