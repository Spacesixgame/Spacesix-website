// import ImageUI from "components/ui/ImageUI";
import Link from "next/link";
import React from "react";
import { Figure } from "react-bootstrap";
// import { Figure } from "react-bootstrap";
import styles from "./HeroRightCol.module.css";

const HeroRightCol = () => {
  return (
    <>
      <Figure className={styles["planet-video"]}>
        <video
          key="hero-video-planet"
          muted
          autoPlay
          loop
          preload="auto"
          width="500px"
          height="500px"
        >
          <source src="/images/hero-planet.mp4" type="video/mp4" />
        </video>

        <Link href="#nft-collection" smooth={true} duration={400} spy={true}>
          <div className={styles.message}>
            <p className={styles.title}>New NFT's</p>
            <p>The spaceships have arrived. Choose your spaceship now !</p>
          </div>
        </Link>
      </Figure>
    </>
  );
};

export default HeroRightCol;
