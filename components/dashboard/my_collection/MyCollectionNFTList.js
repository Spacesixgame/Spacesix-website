import React from "react";
import classes from "components/general/NFTList.module.css";
import styles from "./MyCollectionNFTList.module.css";
import NFTItem from "components/general/NFTItem";
import MyCollectionNFTActions from "./MyCollectionNFTActions";
import NFTItemPrice from "components/general/NFTItem/price/NFTItemPrice";
import useStakeContract from "hooks/use-stakeContract";
import useMintNFTContract from "hooks/use-mintNFTContract";
import useMintSpaceshipNFTContract from "hooks/use-mintSpaceshipNFTContract";
import useStakeSpaceshipContract from "hooks/use-stakeSpaceshipContract";
import useMintSegmentNFTContract from "hooks/use-mintSegmentNFTContract";

const MyCollectionNFTList = ({
  NFTList,
  category,
  onUpdateMycolllectionList,
}) => {
  const { stakeContract, stakeAddress } = useStakeContract();
  const { stakeSpaceshipContract, stakeSpaceshipAddress } =
    useStakeSpaceshipContract(); // for stake spaceships
  const { mintNFTContract } = useMintNFTContract();
  const { mintSpaceshipNFTContract, mintSpaceshipNFTAddress } =
    useMintSpaceshipNFTContract(); // for stake spaceships
  const { mintSegmentContract } = useMintSegmentNFTContract(); // for stake spaceships

  var contracts;
  if (category === "NFT") {
    contracts = {
      stake: stakeContract,
      mint: mintNFTContract,
    };
  } else if (category === "NFT_SPACESHIP") {
    contracts = {
      stake: stakeSpaceshipContract,
      mint: mintSpaceshipNFTContract,
    };
  } else {
    contracts = {
      stake: null,
      mint: mintSegmentContract,
    };
  }

  var address;
  if (category === "NFT") {
    address = stakeAddress;
  } else if (category === "NFT_SPACESHIP") {
    address = stakeSpaceshipAddress;
  } else {
    address = null;
  }

  const NFTListElement = (
    <ul className={classes["nft-list"]}>
      {NFTList.map((item, index) => (
        <NFTItem
          key={"mycollection" + item.itemId + item.tokenId + "-" + index}
          staticFile={item.staticFile}
          image={item.image}
          resoursesValue={item.resourses}
          name={item.name}
          level={item.level}
          stakedTime={item.stakedTime}
          // traits={item.traits}
          packageCount={item.packageCount}
          userCount={item.userCount}
          category={item.category}
        >
          {{
            action: (
              <MyCollectionNFTActions
                itemId={item.itemId}
                zone={item.name}
                tokenId={item.tokenId}
                key={item.tokenId}
                didStake={item.didStake}
                timestamp={item.stakedTime}
                contracts={contracts}
                stakeAddress={address}
                onUpdateMycolllectionList={onUpdateMycolllectionList}
              />
            ),
            price: <NFTItemPrice BUSDPrice={item.amount} />,
          }}
        </NFTItem>
      ))}

      <li key="hidden-1" className={classes["hidden-flex-item"]}></li>
      <li key="hidden-2" className={classes["hidden-flex-item"]}></li>
      <li key="hidden-3" className={classes["hidden-flex-item"]}></li>
      <li key="hidden-4" className={classes["hidden-flex-item"]}></li>
    </ul>
  );

  return (
    <div className={styles.container}>
      {NFTList && NFTList.length > 0 ? (
        NFTListElement
      ) : (
        <h4>There is no NFT !</h4>
      )}
    </div>
  );
};

export default MyCollectionNFTList;
