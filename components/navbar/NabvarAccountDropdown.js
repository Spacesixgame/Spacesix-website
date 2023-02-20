import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./NabvarAccountDropdown.module.css";
import { Dropdown } from "react-bootstrap";
import { BsGrid } from "react-icons/bs";

const NabvarAccountDropdown = () => {
  const navbarItems = [
    {
      icon: <BsGrid className={styles.icon} />,
      title: "My Collection",
      link: "/dashboard",
    },
  ];
  return (
    <Dropdown className={styles["dropdown"]}>
      <Dropdown.Toggle>
        <ImageUI
          alt="profile"
          src="userImage.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles["dropdown-menu"] + " mt-2"}>
        {navbarItems.map((item) => (
          <Dropdown.Item
            key={item.title}
            href={item.link}
            className={styles["dropdown-item"]}
          >
            {item.icon}
            {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NabvarAccountDropdown;
