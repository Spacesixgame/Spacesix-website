import CustomToggleButton from "components/ui/CustomToggleButton";
import React from "react";
// import styles from "./MyCollectionSwitch.module.css";

const MyCollectionSwitch = ({ category, onSetSelectedOption }) => {
  const switchOptions = [
    {
      title: "Lands",
      value: "NFT",
    },

    {
      title: "Spaceships",
      value: "NFT_SPACESHIP",
    },
    {
      title: "Segments",
      value: "NFT_SEGMENT",
    },
    {
      title: "Boxes",
      value: "NFT_BOX",
    },
    {
      title: "Resources",
      value: "NFT_RESOURCE",
    },
  ];

  return (
    <CustomToggleButton
      selectedOption={category}
      options={switchOptions}
      onSetSelectedOption={onSetSelectedOption}
    />
  );
};

export default MyCollectionSwitch;
