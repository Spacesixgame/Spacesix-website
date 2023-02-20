import ImageUI from "components/ui/ImageUI";
import { useRouter } from "next/router";
import React from "react";
import styles from "./HeroLeftCol.module.css";

const HeroLeftCol = () => {
  const router = useRouter();

  return (
    <div className={styles["hero__left-col"]}>
      <div className={styles.texts}>
        <div className={styles["title"]}>
          <div className={styles["first-line"]}>
            Put
            <div className={styles["your-span"]}>
              <p>your</p>
              <ImageUI src="highlight-bling-line.png" width="50" height="50" />
            </div>
          </div>
          <p>footprint in</p>
          <div className={styles["space-travel"]}>
            <p className={styles["spcae-span"]}>Space Six</p>
          </div>
        </div>

        <p className={styles["content"]}>
          As part of the SpaceSix ecosystem, our competent developers designed
          this "Explore-to-Earn" game to provide multiple methods of earning in
          addition to entertaining and providing you with endless hours of fun.
        </p>
      </div>

      <div className={styles["hero-actions"]}>
        <button className="primary-btn" onClick={() => router.push("/presale")}>
          Buy NFT
        </button>

        {/* <button className="border-btn">Play Game</button> */}

        <button className={` ${styles['playgame_action']} border-btn `}>
          <p>Play Game</p>
          <p>Comming Soon...</p>
        </button>
      </div>
    </div>
  );
};

export default HeroLeftCol;
