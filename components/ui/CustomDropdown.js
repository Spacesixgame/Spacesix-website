import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import styles from "./CustomDropdown.module.css";

const CustomDropdown = ({
  menuButtonTitle,
  menuButtonLabel,
  dropdownList,
  selectedItem,
  onSelectItemHandler,
}) => {
  return (
    <Menu>
      <MenuButton
        className={styles["menu-button"]}
        transition="all 0.2s"
        borderRadius="md"
      >
        <div>
          {menuButtonTitle}
          <ChevronDownIcon className={styles.icon} />
        </div>
        <span className={styles.label}>{menuButtonLabel}</span>
      </MenuButton>
      <MenuList className={styles["menu-list"]} zIndex="2" bg="gray.100">
        {dropdownList.map((item, index) => (
          <MenuItem
            key={"dropdownitem" + index}
            className={`
            ${styles["menu-item"]}
            // ${item.active ? styles["active"] : ""}
            `}
            onClick={() => onSelectItemHandler(item)}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CustomDropdown;
