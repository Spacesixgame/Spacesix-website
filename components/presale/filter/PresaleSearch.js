import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React, { useRef } from "react";
import styles from "./PresaleSearch.module.css";
import { SearchIcon } from "@chakra-ui/icons";

const PresaleSearch = ({ onSetFilter }) => {
  const searchText = useRef("");

  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      onSetFilter({
        textSearch: searchText.current.value,
      });
    }
  };

  return (
    <Stack className={styles["search-form"]}>
      <InputGroup>
        <InputLeftElement
          className={styles["input-left-element"]}
          pointerEvents="none"
          children={<SearchIcon />}
        />
        <Input
          type="text"
          ref={searchText}
          onKeyDown={keyDownHandler}
          placeholder="Search Land, Zone or..."
        />
      </InputGroup>
    </Stack>
  );
};

export default PresaleSearch;
