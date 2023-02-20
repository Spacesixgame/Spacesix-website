import React, { useState } from "react";
import styles from "./NFTItemResources.module.css";
import { TbInfoSquare } from "react-icons/tb";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const NFTItemResources = ({ level, resourceValue, name }) => {
  const resourceLevelInfo = {
    1: "A total of 510 level 1 lands are available in Level 1, which contain 15% of the all resources. On this land level, daylight lasts 3 hours a day, and each owner can only access one reward box.    The owners will receive one NFT box of profit for a three-month stake, and for a six-month stake, they will receive 15% of their initial land purchase cash back.",
    2: "A maximum of 380 level 2 lands exist, and 18% of the total resources can be found there. There are four hours of daylight each day, and each owner has access to one gift box. Each staked land will yield one NFT box rare profit after three months, and after six months, owners will receive 20% of the initial purchase price as cash back.",
    3: "Level 3 lands consist of 250, with 20% of the total resources located in them. This land level has five hours of daylight per day, and two gift boxes are accessible to every owner. After staking land for three months, owners will receive one epic NFT box, and after staking land for six months, owners will receive 25% of their purchase price back.",
    4: "The game has a total of 110 level 4 lands, and 22% of all resources are concentrated in it. An owner can access three reward boxes and benefit from six hours of daylight daily.  With a 3-month stake, each owner will receive one Mythical NFT box, and with a 6-month stake, they will receive 30% of their original purchase price as cash back.",
  };

  const tooltipByName = {
    Optimus: {
      description: "Battle Arena Planet",
      link: "https://space-six.gitbook.io/whitepaper-space-six/nfts/planets/optimus",
    },
    Pandora: {
      description:
        "Only those players who have bought Dimond Land have access to the exploration of the Pandora Planet. The other cases require the discovery of X-Fuel, which gives you permission to explore Pandora.",
      link: "https://space-six.gitbook.io/whitepaper-space-six/nfts/planets/pandora",
    },
    Altair: {
      description:
        "Altair Planet can be explored by players who have purchased diamond or gold zone land. As for the other cases, you must find X-Fuel in order to explore Altair.",
      link: "https://space-six.gitbook.io/whitepaper-space-six/nfts/planets/altair",
    },
    Miranda: {
      description:
        "It is possible for players who have purchased lands in the Silver, Gold, or Diamond zones to explore Miranda Planet. In other cases, you must find X-Fuel to explore Miranda.",
      link: "https://space-six.gitbook.io/whitepaper-space-six/nfts/planets/miranda",
    },
    Vega: {
      description:
        "All players can explore Vega Planet regardless of whether they own land in the Bronze, Silver, Gold, or Diamond zones.",
      link: "https://space-six.gitbook.io/whitepaper-space-six/nfts/planets/vega",
    },
  };

  const renderTooltip = (props) => {
    return (
      <Tooltip
        className={styles["mytooltip"]}
        bsPrefix={styles["tooltip"]}
        id="button-tooltip"
        {...props}
      >
        <h5>Reasorces Data:</h5>
        <p>
          {resourceLevelInfo[level]
            ? resourceLevelInfo[level]
            : tooltipByName[name].description}
        </p>
        <p>{resourceLevelInfo[level] ? null : "Click to show more"}</p>
      </Tooltip>
    );
  };

  return (
    <div className={styles.container}>
      {resourceValue && (
        <>
          <OverlayTrigger placement="top" overlay={renderTooltip}>
            <div className={styles["btn"]}>
              <TbInfoSquare
                className={styles["icon"]}
                onClick={() => {
                  window.open(tooltipByName[name].link, "_blank").focus();
                }}
              />
            </div>
          </OverlayTrigger>
          <p>Resources</p>
          <p className={styles["value"]}>{resourceValue}</p>{" "}
        </>
      )}
    </div>
  );
};

export default NFTItemResources;
