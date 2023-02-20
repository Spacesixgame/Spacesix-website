import SectionLayout from "components/ui/SectionLayout";
import React from "react";
import PartnershipsList from "./PartnershipsList";
import styles from "./Partnerships.module.css";
import UIStar from "./UIStar";
import {Player} from "@lottiefiles/react-lottie-player";

const Partnerships = () => {
  const partnershipsList = [
    {
      link: "https://market.nftically.com/Spacesix?tab=activity",
      image: "partnerships-nftically-normal.png",
    },
    {
      link: "https://dapdap.io/game/details/1171",
      image: "partnerships-dapdap-normal.png",
    },
    {
      link: "https://dappradar.com/binance-smart-chain/other/space-six",
      image: "partnerships-dappredar-normal.png",
    },
    {
      link: "https://nomics.com/assets/scx3-space-six",
      image: "partnerships-nomics-normal.png",
    },
    {
      link: "https://www.alchemy.com/dapps/space-six-game",
      image: "partnerships-alchemy.png",
    },
    {
      link: "https://chainplay.gg/games/space-six/",
      image: "partnerships-chainplay.png",
    },
  ];

  return (
    <SectionLayout className={styles["partnerships-layout"]}>
      {{
        title: (
          <>
            space - six <span>Partners</span>
          </>
        ),
        main: (
          <>
            <PartnershipsList partnershipsList={partnershipsList} />
            <UIStar />
          </>
        ),
      }}
    </SectionLayout>
  );
};

export default Partnerships;
