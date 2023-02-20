import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import styles from "./CustomToggleButton.module.css";

const CustomToggleButton = ({
  selectedOption,
  options,
  onSetSelectedOption,
}) => {
  const [alignment, setAlignment] = useState(selectedOption);

  const handleChange = (event, newAlignment) => {
    if (newAlignment) {
      setAlignment(newAlignment);
      onSetSelectedOption(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      className={styles.toglleButons}
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {options.map((option) => (
        <ToggleButton
          className={`${styles["option"]} + ${
            option.value === alignment && styles["selected"]
          } `}
          value={option.value}
          key={option.value}
        >
          <p>{option.title}</p>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CustomToggleButton;
