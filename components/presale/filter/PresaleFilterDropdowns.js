import CustomMenuOptionGroup from "components/ui/CustomMenuOptionGroup";
import { zones, types } from "modules/levels";
import React, { useEffect, useState } from "react";
import styles from "./PresaleFilterDropdowns.module.css";

const PresaleFilter = ({
  suppliedCategories,
  NFTType,
  onSetNFTType,
  onSetFilter,
}) => {
  const [NFTTypeSuppliedCategories, setNFTTypeSuppliedCategories] =
    useState("");

  useEffect(() => {
    if (NFTType === "lands") {
      setNFTTypeSuppliedCategories([...(suppliedCategories || []), "lands"]);
    } else {
      setNFTTypeSuppliedCategories([...(suppliedCategories || [])]);
    }
  }, [NFTType]);

  const selectZoneOptionHandler = (zone) => {
    var selectedArray = [];
    let find = suppliedCategories.includes(zone);

    if (find) {
      selectedArray = suppliedCategories.filter((item) => item !== zone);
    } else {
      selectedArray = [...suppliedCategories];
      selectedArray.push(zone);
    }

    onSetFilter({ category: selectedArray });
  };

  const selectTypeOptionHandler = (value) => {
    if (value == "lands") {
      onSetFilter({ category: [] });
      onSetNFTType("lands");
    } else {
      onSetFilter({ category: [value] });
      onSetNFTType(value);
    }
  };

  const levelsZoneData = zones.map((item) => {
    return {
      ...item,
      value: item.zone,
    };
  });

  return (
    <div className={styles["container"]}>
      <h5>Filter :</h5>

      <div className={styles.dropdowns}>
        <CustomMenuOptionGroup
          menuButtonTitle={"Type"}
          type={"radio"}
          dropdownList={types}
          menuButtonLabel={"NFT Type"}
          onSelectItemHandler={selectTypeOptionHandler}
          selectedItems={NFTTypeSuppliedCategories}
        />

        {NFTType === "lands" && (
          <CustomMenuOptionGroup
            menuButtonTitle={"All Zone"}
            closeOnSelect={false}
            dropdownList={levelsZoneData}
            selectedItems={suppliedCategories}
            type={"checkbox"}
            menuButtonLabel={"Zone"}
            onSelectItemHandler={selectZoneOptionHandler}
          />
        )}
      </div>
    </div>
  );
};

export default PresaleFilter;
