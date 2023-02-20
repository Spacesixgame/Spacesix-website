import React from "react";
import styles from "./MyCollectionNFTActions.module.css";
import DetailsModal from "./DetailsModal";
import StakeModal from "./StakeModal";
import UnstakeAction from "components/general/NFTItem/action/UnstakeAction";

const MyCollectionNFTActions = ({
  tokenId,
  itemId,
  didStake,
  zone,
  onUpdateMycolllectionList,
  timestamp,
  contracts,
  stakeAddress,
}) => {
  
  var actions; 
  if (contracts.stake === null) {
    actions = null;
  } else {
    
    if (!didStake) {
      actions = (
        <StakeModal
          NFTZone={zone}
          itemId={itemId}
          onUpdateMycolllectionList={onUpdateMycolllectionList}
          contracts={contracts}
          stakeAddress={stakeAddress}
        />
      );
    } else {
      actions = <UnstakeAction
        itemId={itemId}
        stakeTime={timestamp}
        contracts={contracts}
        stakeAddress={stakeAddress}
        onUpdateMycolllectionList={onUpdateMycolllectionList}
      />;
    }
  }

  return (
    <div className={styles.modals}>
      {actions}
      <DetailsModal tokenId={tokenId} mintAddress={contracts.mint._address} />
    </div>
  );
};

export default MyCollectionNFTActions;
