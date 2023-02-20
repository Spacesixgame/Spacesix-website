import React, {useState} from "react";
import Hero from "./hero/Hero";
import NFTCollection from "./nft_collection";
import styles from "./HomeMain.module.css";
import dynamic from "next/dynamic";
import Partnerships from "./partnerships/Partnerships";

const SocialMedia = dynamic(() => import("./social_media/SocialMedia"));
const UpcommingEvents = dynamic(() =>
    import("./upcomming_events")
);


const RoadMap = dynamic(() => import("./road_map/Roadmap"));

function HomeMain() {
    const [isPlaying, setIsPlaying] = useState(true);
    return (
        <div className={styles["home-main"]}>
            <Hero setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
            <NFTCollection isPlaying={isPlaying}/>
            <SocialMedia/>
            <UpcommingEvents/>
            <Partnerships/>
            <RoadMap/>
        </div>
    );
}

export default HomeMain;
