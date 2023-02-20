import React, { useEffect, useState } from "react";
import styles from "./RoadmapBar.module.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
// import { roadmapData } from "modules/roadmapData";
import ImageUI from "components/ui/ImageUI";

const RoadmapBar = () => {
  const currentStep = 4;
  const [roadmapList, setRoadmapList] = useState([]);
  const [currentMiddleItem, setCurrentMiddleItem] = useState(currentStep - 1);

  const indexOfLastRecord = currentMiddleItem + 1;
  const indexOfFirstRecord = currentMiddleItem - 1;

  const roadmapData = [
    {
      roadmap: "q1",
      month: "Apr / Jun",
      description: "Reasearch & Economy design",
      Q: 1,
      static: "planet-1.png",
    },
    {
      roadmap: "q2",
      month: "July / Aug",
      description:
        "Develop site,Pre-sale contract, Develop platform and marketplace ,Design NFT (Lands & Planet)",
      Q: 2,
      static: "planet-2.png",
    },

    {
      roadmap: "q3",
      month: "Sep / Oct",
      description:
        "Site and public pre-sale launch, Staking platform for lands and planets, Airdrop phase 1, White paper release",
      Q: 3,
      static: "planet-3.png",
    },
    {
      roadmap: "q4",
      month: "Nov / Dec",
      description:
        "NFT Pre-sale phase 2, Lunch pad listing, Multi-chain NFT and payment (on BSC & Polygon)  ",
      Q: 4,
      static: "planet-4.png",
    },

    {
      roadmap: "q1",
      month: "Jan / Mar",
      description:
        "Alpha version game release part 1 (Build & and preparation for explore), Open marketplace for trading NFT,  Animation & 3D planet on market place, White paper update, Roadmap update, Application platform for Android, IOS  Mac  Windows ",
      Q: 5,
      static: "planet-1.png",
    },
    {
      roadmap: "q2",
      month: "Apr / Jun",
      description:
        "Alpha version explore release part 2 (start Explore to earn), Beta version part 1 , Rent contract on Lands, Renting section on marketplace, Opensea listing,Airdrop",
      Q: 6,
      static: "planet-2.png",
    },
    {
      roadmap: "q3",
      month: "July / Sep",
      description:
        "AR technology & 3D sound on game,Battle arena mode (Alpha version) , Leaderboard ,New Metaverse game mode (Alpha), New planet release on market place, Pre-sale lands phase 3 (New NFT) ",
      Q: 7,
      static: "planet-3.png",
    },
    {
      roadmap: "q4",
      month: "Oct/Dec",
      description:
        "New Metaverse game mode (Alpha) ,Developing VR system , New game mode, Roadmap updating",
      Q: 8,
      static: "planet-4.png",
    },
  ];

  useEffect(() => {
    // if (roadmapData) {
    const currentRecords = roadmapData.slice(
      indexOfFirstRecord,
      indexOfLastRecord + 1
    );

    setRoadmapList(currentRecords);
    // }
  }, [currentMiddleItem]);

  const changeStepHandler = (amount) => {
    let newMiddleItem = currentMiddleItem + amount;
    if (newMiddleItem < 1) {
      return;
    } else if (newMiddleItem > roadmapData.length - 1) {
      return;
    } else {
      setCurrentMiddleItem(newMiddleItem);
    }
  };

  return (
    <div className={styles["progressbar-container"]}>
      <button
        disabled={currentMiddleItem === 1}
        onClick={() => changeStepHandler(-1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <ul className={styles["progressbar"]}>
        {roadmapList.map((item, index) => (
          <li
            key={item.Q + index}
            className={`
                ${item.Q === currentStep ? styles["active"] : ""}
                ${item.Q < currentStep ? styles["beforActive"] : ""}
                `}
          >
            <p className={styles["month"]}>{item.month}</p>
            <figure className={styles["planet-image"]}>
              <ImageUI src={item.static} width="120px" height="120px" />
            </figure>
            <>
              {item.description.split(",").map((p) => (
                <p key={p} className={styles["description"]}>
                  {p}
                </p>
              ))}
            </>
          </li>
        ))}
      </ul>
      <button
        className={styles["progressbar__next-step"]}
        onClick={() => changeStepHandler(1)}
        disabled={currentMiddleItem === roadmapData.length - 2}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default RoadmapBar;
