import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Packages = ({ packageList, selectedItem, onSetSelectedPackage }) => {
  const [list, setList] = useState([]);

  const processPackageList = (packageList) => {
    let tempList = [];
    for (let index = 0; index < packageList.amount.length; index++) {
      var item = {
        count: packageList.count[index],
        amount: packageList.amount[index],
        normalizedAmount: packageList.normalizedAmount[index],
        selection: index + 1,
      };
      tempList.push(item);
    }
    setList(tempList);
  };

  useEffect(() => {
    processPackageList(packageList);
  }, [packageList]);

  const selectOption = (item) => {
    onSetSelectedPackage(item);
  };

  return (
    <>
      <Menu className={styles.menu} closeOnSelect={true}>
        <MenuButton
          className={styles["menu-button"]}
          transition="all 0.2s"
          borderRadius="md"
          textAlign={"left"}
        >
          <div>
            {selectedItem.count ? "Count : " + selectedItem.count : "Count"}
            <ChevronDownIcon className={styles.icon} />
          </div>
        </MenuButton>

        <MenuList className={styles["menu-list"]} zIndex="3">
          {list.map((option) => {
            let isSelected =
              selectedItem && selectedItem.count === option.count
                ? true
                : false;
            return (
              <MenuItem
                key={option.count}
                onClick={() => selectOption(option)}
                _hover={{ bg: "black.400" }}
                _expanded={{ bg: "black.400" }}
                _focus={{ bg: "inherit" }}
                className={styles["menu-item"]}
              >
                <input
                  className={styles["form-input"]}
                  type={"radio"}
                  checked={isSelected}
                  readOnly
                />
                <label className={styles["form-label"]}>{option.count}</label>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default Packages;
