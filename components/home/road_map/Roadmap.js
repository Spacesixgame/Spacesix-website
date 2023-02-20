import SectionLayout from "components/ui/SectionLayout";
import React from "react";
import styles from "./Roadmap.module.css";
import RoadmapBar from "./RoadmapBar";
import UIStar from "./UIStar";
import { Player } from "@lottiefiles/react-lottie-player";

const Roadmap = () => {
  return (
    <div className={styles["roadmap-main"]} id="roadmap">
      <SectionLayout className="mb-0">
        {{
          title: (
            <>
              Space Six <span>RoadMap</span>
            </>
          ),
          description:
            "Wondering what we're up to? Our primary focus at the moment is on the presale launch and staking program in the following year, which starts in 2021. In 2023, SpaceSix will undergo significant upgrades. SpaceSix's alpha version is scheduled for release on December 2023, and its beta version is scheduled for launch on March 2023.",
          main: (
            <>
              <RoadmapBar />
              <UIStar />
            </>
          ),
        }}
      </SectionLayout>
    </div>
  );
};

export default Roadmap;
