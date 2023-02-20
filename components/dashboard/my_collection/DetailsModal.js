import { Heading } from "@chakra-ui/react";
import CustomModal from "components/ui/CustomModal";
import React, { useState } from "react";
import styles from "./DetailsModal.module.css";
import { BiCopy } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { formatAddress } from "store/ui-actions";
import classes from "components/general/NFTItem/action/styles.module.css";


const DetailsModal = ({ tokenId, mintAddress }) => {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(mintAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <CustomModal className={styles.modal} cancelButton>
      {{
        button: <div className={classes.action}>Details</div>,
        header: (
          <Heading as="h5" size="md">
            Details
          </Heading>
        ),

        body: (
          <>
            <div className={styles.details}>
              <div>
                <h5>Token ID : </h5>
                <p>{tokenId}</p>
              </div>
              <div>
                <h5>Contract Address :</h5>
                <div>
                  <p>{dispatch(formatAddress(mintAddress, 4))}</p>
                  <button
                    className={styles.copy}
                    onClick={copyToClipboardHandler}
                  >
                    <BiCopy />
                    {copied ? <span>Copied.</span> : null}
                  </button>
                </div>
              </div>
            </div>
          </>
        ),
        // footer: <Button className="primary-btn text-dark">Send </Button>,
      }}
    </CustomModal>
  );
};

export default DetailsModal;
