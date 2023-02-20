import React, {useState} from "react";
import HeroLeftCol from "./HeroLeftCol";
import HeroRightCol from "./HeroRightCol";
import HeroVideo from "./HeroVideo";
import UIStars from "./UIStars";
import styles from "./Hero.module.css";

const Hero = (props) => {

    const videoEndingHandler = () => {
        props.setIsPlaying(false);
    };

    return (
        <div className={styles["hero-main"]}>
            <UIStars/>
            {/* {isPlaying &&  */}
            <HeroVideo onVideoEnding={videoEndingHandler}/>
            {/* // } */}
            <div className="d-none d-md-flex  ">
                {!props.isPlaying && <HeroLeftCol/>}
                {!props.isPlaying && <HeroRightCol/>}
            </div>
            <div className=" d-md-none">
                <HeroLeftCol/>
                <HeroRightCol/>
            </div>
        </div>
    );
};

export default Hero;
