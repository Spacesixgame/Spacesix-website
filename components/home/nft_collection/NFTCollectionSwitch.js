import React from "react";
import CustomToggleButton from "components/ui/CustomToggleButton";

const NFTCollectionSwitch = ({ selectedCategory, onSelectCategory }) => {
  const switchOptions = [
    {
      title: "Lands",
      value: "lands",
    },
    {
      title: "Spaceships",
      value: "spaceship",
    },
    // {
    //   title: "Segments",
    //   value: "segment",
    // },
  ];
  return (
    <CustomToggleButton
      options={switchOptions}
      selectedOption={selectedCategory}
      onSetSelectedOption={(cat) => onSelectCategory(cat)}
    />
  );
};

export default NFTCollectionSwitch;
