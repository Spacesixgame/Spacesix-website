import { RadioGroup, Stack } from "@chakra-ui/react";
import CustomModal from "components/ui/CustomModal";
import CustomRadioOption from "components/ui/CustomRadioOption";
import React, { useState } from "react";
import { IoWarning } from "react-icons/io5";
import StakeAction from "../../general/NFTItem/action/StakeAction";
import styles from "./StakeModal.module.css";
import classes from "components/general/NFTItem/action/styles.module.css";



const StakeModal = ({
  NFTZone,
  itemId,
  contracts,
  stakeAddress,
  onUpdateMycolllectionList,
}) => {
  const [selectedStakeType, setSelectedStakeType] = useState("1");

  const stakeDurations = [
    {
      title: "3 Month",
      value: "0",
    },

    {
      title: "6 Month",
      value: "1",
    },
    {
      title: "1 Year",
      value: "2",
    },
  ];

  const setSelectedItemHandler = (item) => {
    setSelectedStakeType(item);
  };

  return (
    <CustomModal className={styles.modal} cancelButton>
      {{
        button: <div className={classes.action}>Stake</div>,
        header: (
          <p className={styles["header"]}>
            How long do you want stake this NFT?
          </p>
        ),

        body: (
          <>
            <p className={styles.zone}>{NFTZone}</p>
            <p className={styles.description}>
              The owners will receive one NFT box (Elite box) of profit for a
              three-month stake, and for a six-month stake, they will receive
              15% of their initial land purchase cash back.
            </p>
            <div className={styles.warning}>
              <IoWarning className={styles.icon} />
              <p>
                Participants who stake lands or planets cannot withdraw until
                the end of the staking period, and the interest profit is
                deposited only at the end
              </p>
            </div>

            <RadioGroup defaultValue="2" className={styles.checkboxes}>
              <Stack spacing={5} direction="row">
                {stakeDurations.map((item) => (
                  <CustomRadioOption
                    onChange={setSelectedItemHandler}
                    value={item.value}
                    text={item.title}
                    selected={selectedStakeType}
                    key={item.value}
                  />
                ))}
              </Stack>
            </RadioGroup>

            <figure className={styles["christmas-container"]}>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets1.lottiefiles.com/packages/lf20_433lxcje.json"
              ></lottie-player>
            </figure>
          </>
        ),

        footer: (
            <StakeAction
              tokenId={itemId}
              stakeTime={selectedStakeType}
              contracts={contracts}
              stakeAddress={stakeAddress}
              onUpdateMycolllectionList={onUpdateMycolllectionList}
            />
        ),
      }}
    </CustomModal>
  );
};

export default StakeModal;
