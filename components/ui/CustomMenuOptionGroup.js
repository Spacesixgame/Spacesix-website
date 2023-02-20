import {
  background,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CustomMenuOptionGroup.module.css";

import { ChevronDownIcon } from "@chakra-ui/icons";
const CustomMenuOptionGroup = ({
  dropdownList,
  menuButtonTitle,
  menuButtonLabel,
  onSelectItemHandler,
  closeOnSelect,
  selectedItems,
  labelBg,
  type,
}) => {
  const toggleOption = (value, isSelected) => {
    onSelectItemHandler(value, isSelected);
  };

  var array = "";
  var findArray = [];
  if (selectedItems) {
    for (let index = 0; index < selectedItems.length; index++) {
      let find = dropdownList.find((item) => {
        return item.value === selectedItems[index];
      });
      if (find) {
        findArray.push(find);
      }
    }
    findArray.map((item, index) => {
      if (index != 0 && index < 2) {
        array = array + " ," + item.title;
      } else if (index == 0) {
        array = item.title;
      }
    });
  }

  return (
    <Menu className={styles.menu} closeOnSelect={closeOnSelect}>
      <MenuButton
        className={styles["menu-button"]}
        transition="all 0.2s"
        borderRadius="md"
        textAlign={"left"}
      >
        <div>
          <p> {array || menuButtonTitle}</p>
          <ChevronDownIcon className={styles.icon} />
        </div>
        <span
          className={styles.label}
          style={{
            backgroundColor: labelBg ? labelBg : "var(--black)",
          }}
        >
          {menuButtonLabel}
        </span>
      </MenuButton>

      <MenuList className={styles["menu-list"]} zIndex="3">
        {dropdownList.map((option) => {
          let isSelected =
            selectedItems && selectedItems.find((item) => item === option.value)
              ? true
              : false;
          return (
            <MenuItem
              key={option.title}
              onClick={() => toggleOption(option.value, isSelected)}
              _hover={{ bg: "black.400" }}
              _expanded={{ bg: "black.400" }}
              _focus={{ bg: "inherit" }}
              className={styles["menu-item"]}
            >
              <input
                className={styles["form-input"]}
                type={type}
                checked={isSelected}
                readOnly
              />
              <label className={styles["form-label"]}>{option.title}</label>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default CustomMenuOptionGroup;
