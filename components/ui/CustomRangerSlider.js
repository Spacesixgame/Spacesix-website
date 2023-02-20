import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./CustomRangerSlider.module.css";

const CustomRangerSlider = ({
  max,
  min,
  // defaultValue,
  maxTitle,
  minTitle,
  onChangeRangeHandler,
}) => {
  const [values, setValues] = useState([]);

  function changeRangeHandler(data) {
    setValues(data);
    onChangeRangeHandler(data);
  }

  return (
    <div className={styles.container}>
      <p>{minTitle}</p>
      <RangeSlider
        defaultValue={[20, 200]}
        min={min}
        max={max}
        step={10}
        marginInline="10px"
        onChange={changeRangeHandler}
      >
        <RangeSliderTrack
          bg="rgba(130, 139, 147, 1)"
          height={"2px"}
          width={"300px"}
        >
          <RangeSliderFilledTrack bgGradient="linear(to-r, var(--orange-yellow), var(--purple),var(--green-blue))" />
        </RangeSliderTrack>
        <Tooltip label={values[0]} aria-label="A tooltip" bg={"gray.900"}>
          <RangeSliderThumb boxSize={3} index={0} />
        </Tooltip>
        <Tooltip label={values[1]} aria-label="A tooltip" bg={"gray.900"}>
          <RangeSliderThumb boxSize={3} index={1} />
        </Tooltip>
      </RangeSlider>
      <p>{maxTitle}</p>
    </div>
  );
};

export default CustomRangerSlider;
