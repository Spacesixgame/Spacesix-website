import React from "react";
import styles from "./NFTItem.module.css";
import NFTItemMedia from "./media";
import NFTItemTimer from "./NFTItemTimer";
import SpaceshipItem from "./type/SpaceshipItem";
import DefaultItem from "./type/DefaultItem";
import ResourceItem from "./type/ResourceItem";
import LandItem from "./type/LandItem";
import NFTItemAction from "./action";
import NFTItemUserNFTCount from "./NFTItemUserNFTCount";

const NFTItem = (props) => {
  const {
    children,
    NFTCounter,
    className,
    onChangeItemNumber,
    staticFile,
    resoursesValue,
    count,
    name,
    soldOut,
    level,
    stakedTime,
    NFTNumber,
    category,
    traits,
    image,
    amount,
    contractAmount,
    tokenId,
    userCount,
    packageCount,
  } = props;

  const soldoutStatus = soldOut || count == 0;

  const renderNFTProperties = () => {
    switch (category) {
      case "silverZone":
      case "bronzeZone":
      case "goldZone":
      case "diamondZone":
      case "planets":
        return (
          <LandItem
            level={level}
            name={name}
            resoursesValue={resoursesValue}
            count={count}
            soldOut={soldoutStatus}
            price={children.price}
            amount={amount}
            category={category}
            tokenId={tokenId}
            contractAmount={contractAmount}
            NFTCounter={NFTCounter}
            onChangeItemNumber={onChangeItemNumber}
          />
        );
      case "spaceship":
        return (
          <SpaceshipItem
            level={level}
            name={name}
            count={count}
            soldOut={soldoutStatus}
            price={children.price}
            amount={amount}
            category={category}
            tokenId={tokenId}
            contractAmount={contractAmount}
            NFTCounter={NFTCounter}
            onChangeItemNumber={onChangeItemNumber}
            traits={traits}
          />
        );
      // case "box":
      //   return (
      //     <DefaultItem
      //       level={level}
      //       name={name}
      //       soldOut={soldoutStatus}
      //       price={children.price}
      //       NFTNumber={NFTNumber}
      //       amount={amount}
      //       category={category}
      //       tokenId={tokenId}
      //       contractAmount={contractAmount}
      //       onChangeItemNumber={onChangeItemNumber}
      //     />
      //   );
      // case "segment":
      //   return (

      //     />
      //   );
      case "resources":
        return <ResourceItem name={name} packageCount={packageCount} />;
      default:
        return (
          <DefaultItem
            level={level}
            name={name}
            soldOut={soldoutStatus}
            price={children.price}
            NFTNumber={NFTNumber}
            amount={amount}
            category={category}
            tokenId={tokenId}
            NFTCounter={NFTCounter}
            contractAmount={contractAmount}
            onChangeItemNumber={onChangeItemNumber}
          />
        );
    }
  };

  return (
    <li
      className={`${styles["nft-item"]} ${
        soldoutStatus ? styles["soldout"] : ""
      } ${className}`}
    >
      <NFTItemMedia
        src={staticFile}
        level={level}
        soldout={soldoutStatus}
        image={image}
      />

      {renderNFTProperties()}

      {stakedTime && <NFTItemTimer timerTimestamp={stakedTime} />}

      {userCount && <NFTItemUserNFTCount quantity={userCount} />}

      {children && children.action && (
        <NFTItemAction>{children.action}</NFTItemAction>
      )}

      {/* {children && children.price && <NFTPrice>{children.price}</NFTPrice>} */}
      {/* {discount && <NFTItemDiscount discount={discount} />}
      <div className={styles["details"]}>
        {count != undefined && <NFTItemCount count={count} soldout={soldOut} />}
      </div>

       {children && children.action && (
       <NFTItemAction>{children.action}</NFTItemAction>
      )}

     */}
    </li>
  );
};

export default NFTItem;
