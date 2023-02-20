import SectionLayout from "components/ui/SectionLayout";
import React from "react";
import styles from "./styles.module.css";
import UpcommingEventsTitle from "./UpcommingEventsTitle";
import UpcommingEventsMain from "./UpcommingEventsMain";

const UpcommingEvents = () => {
  return (
    <div className={styles["home__upcomming-events"]}>
      <SectionLayout className={styles["upcomming-layout"]}>
        {{
          title: <UpcommingEventsTitle />,
          description:
            "  Enjoy What SpaceSix Has to Offer. We Have a Variety of Events, from Staking NFTs to Airdropping for Every Player in the Universe! Check Out Our Upcoming Events.",
          main: (
            <>
              <UpcommingEventsMain />
            </>
          ),
        }}
      </SectionLayout>
    </div>
  );
};

export default UpcommingEvents;
