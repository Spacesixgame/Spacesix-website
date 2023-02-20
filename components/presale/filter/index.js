import CustomPagination from "components/ui/CustomPagination";
import React, { useState } from "react";
import PresaleFilter from "./PresaleFilterDropdowns";
import PresaleFilterAction from "./PresaleFilterAction";
import PresaleSearch from "./PresaleSearch";
import styles from "./styles.module.css";
import PresaleFilterPrice from "./PresaleFilterPrice";
import PresaleResetAction from "./PresaleResetAction";

const PresaleFilterAndSort = ({
  children,
  onSetItemsCount,
  onGetItems,
  itemsCount,
}) => {
  const [filters, setFilters] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const changePageNumber = (num) => {
    onGetItems({ page: num, ...filters });
  };

  const setSelectedFilter = (payload) => {
    setFilters((prev) => {
      return { ...prev, ...payload, textSearch: "" };
    });
  };

  const setSearchText = (payload) => {
    setFilters(payload);
    onGetItems(payload);
  };

  const getFilterdNFTsHandler = () => {
    onSetItemsCount(0);
    onGetItems(filters);
  };

  const resetFilters = async () => {
    setFilters({});
    setSelectedType("");
  };

  return (
    <>
      <PresaleSearch onSetFilter={setSearchText} />
      <div className={styles.actions}>
        <PresaleFilterAction onSupplyFilters={getFilterdNFTsHandler} />
        <PresaleResetAction onResetFilters={resetFilters} />
      </div>
      <PresaleFilter
        suppliedCategories={filters.category}
        NFTType={selectedType}
        onSetFilter={setSelectedFilter}
        onSetNFTType={setSelectedType}
      />

      <PresaleFilterPrice
        selectedType={selectedType}
        onSetPriceRangeFilter={setSelectedFilter}
      />
      {children}
      <CustomPagination
        itemsCount={itemsCount}
        onChangeCurrentPageHandler={changePageNumber}
      />
    </>
  );
};

export default PresaleFilterAndSort;
