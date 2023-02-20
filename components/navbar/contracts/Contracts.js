import ImageUI from "components/ui/ImageUI";
import {constants} from "config/globalConfig";
import React, { useState } from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import styles from "./Contracts.module.css";

const Contracts = ({ className }) => {
  const [show, setShow] = useState(false);

  const bscScanURL = "https://bscscan.com/address/";

  const contractList = [
    {
      name: "Lands",
      link: bscScanURL + constants.mintNFTAddress,
    },
    {
      name: "Spaceship",
      link: bscScanURL + constants.mintSpaceshipNFTAddress,
    },
    {
      name: "Segment",
      link: bscScanURL + constants.mintSegmentNFTAddress,
    },
  ];

  const stakeContractList = [
    {
      name: "Land",
      link: bscScanURL + constants.stakeAddress,
    },
    {
      name: "Spaceship",
      link: bscScanURL + constants.stakeSpaceshipAddress,
    },
  ];

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const title = (
    <div className={styles["dropdown-title"]}>
      <ImageUI
        src="BNB.png"
        height="18px"
        width="18px"
        className={styles.image}
      />
      <p>Contracts</p>
    </div>
  );

  return (
    <NavDropdown
      title={title}
      className={styles.dropdown + " " + className}
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      {contractList.map((item) => (
        <NavDropdown.Item
          href={item.link}
          className={styles.item}
          key={item.name}
          target="_blank"
        >
          {" "}
          {item.name}
          <ImageUI
            src="Subtract.png"
            width="20px"
            height="20px"
            className={styles.image}
          />
        </NavDropdown.Item>
      ))}
      <Dropdown.Divider color="gray" className={styles.seprator} />

      <div className={`${styles.item}  ${styles.title} `}>
        Stake
      </div>

      {stakeContractList.map((item) => (
        <NavDropdown.Item
          href={item.link}
          className={styles.item}
          key={item.name}
          target="_blank"
        >
          {" "}
          {item.name}
          <ImageUI
            src="Subtract.png"
            width="20px"
            height="20px"
            className={styles.image}
          />
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default Contracts;
