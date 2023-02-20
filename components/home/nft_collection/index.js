import SectionLayout from "components/ui/SectionLayout";
import React from "react";
import styles from "./NFTCollection.module.css";
import NFTCollectionMain from "./NFTCollectionMain";

const NFTCollection = () => {
  return (
    <>
      <div id={"nft-collection"}></div>

      <SectionLayout className={styles["nft-collection"]}>
        {{
          title: (
            <>
              Lets join pre sale NFTs on <span>Marketplace </span>
            </>
          ),
          description:
            "  We are bringing this project to a level of excellence that a cool  feature will be released where players will be able to avail of quality and highly valued NFTs. Please participate in our Presale and be our Pioneer.",
          main: (
              <NFTCollectionMain />
          ),
        }}
      </SectionLayout>
    </>
  );
};

export default NFTCollection;
