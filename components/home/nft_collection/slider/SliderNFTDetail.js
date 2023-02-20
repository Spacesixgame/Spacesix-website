import { Link } from "@chakra-ui/react";
import NFTItemCount from "components/general/NFTItem/NFTItemCount";
import NFTItemDetails from "components/general/NFTItem/NFTItemDetails";
import SpaceshipNFTDetails from "components/general/NFTItem/spaceship";
import { resourceLevelInfos } from "modules/resourceLevelInfos";
import React from "react";
import styles from "./SliderNFTDetail.module.css";

const SliderNFTDetail = ({
  name,
  level,
  category,
  resourses,
  count,
  traits,
  description,
}) => {
  const NFTDetails =
    category == "spaceship" ? (
      <SpaceshipNFTDetails level={level} traits={traits} />
    ) : (
      <NFTItemDetails level={level} resoursesValue={resourses} />
    );

  var nftDecription;
  if (category == "spaceship") {
    nftDecription = description;
  } else {
    nftDecription = resourceLevelInfos[level];
  }

  return (
    <div className={styles.details}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}> {nftDecription}</p>
      <div className={styles.attributes}>
        {NFTDetails}
        {count && <NFTItemCount className={styles.count} count={count} />}
      </div>
      <Link href={"/presale"} className={`${styles.action} + '  primary-btn`}>
        Show Marketplace
      </Link>
    </div>
  );
};

export default SliderNFTDetail;
