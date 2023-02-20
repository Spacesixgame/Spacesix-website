import React from "react";
import UpcommingEventsItem from "./UpcommingEventsItem";
import styles from "./UpcommingEventsList.module.css";

const UpcommingEventsList = () => {
  const upcommingEvents = [
    {
      id: 1,
      title: "NFT Boxes",
      description:
        "Airdrops of NFT boxes will be conducted for all loyal community members to accumulate. These NFT boxes are spaceships or spaceships segments and will be given to active participants in promotions.",
      remainTime: "",
      viewers: 4.9,
      image: "1.jpg",
    },
    {
      id: 2,
      title: "Biggest Airdrop",
      description:
        "The biggest airdrop event will be held in the biggest defi platform dapp radar. Don't miss out on our upcoming Dapp radar airdrop and be one of our lucky winners.",
      remainTime: "",
      viewers: 12.3,
      image: "2.jpg",
    },
    {
      id: 3,
      title: "NFTs For Spaceships Segments",
      description:
        "Coming soon: NFTs for spaceship segments. It is anticipated that we will launch our new Spaceship segment NFTs, soon. Our willing users can purchase them from the marketplace.",
      remainTime: "",
      viewers: 99,
      image: "3.jpg",
    },
  ];
  return (
    <div className={styles["upcomming-events__list"]}>
      {upcommingEvents.map((item) => (
        <UpcommingEventsItem
          key={item.id}
          image={item.image}
          dscrb={item.description}
          title={item.title}
          viewers={item.viewers}
          remainTime={item.remainTime}
        />
      ))}
    </div>
  );
};

export default UpcommingEventsList;
