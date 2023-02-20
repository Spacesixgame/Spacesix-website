import React, { useEffect, useState } from "react";
import styles from "./PresaleMain.module.css";
import SectionLayout from "components/ui/SectionLayout";
import UIStar from "./UIStar";
import PresaleNFTList from "./PresaleNFTList";
import Loader from "components/ui/Loader";
import PresaleFilter from "./filter";
import toast from "react-hot-toast";
import { getFilterNFTs } from "helpers/api-utils";
import { Player } from "@lottiefiles/react-lottie-player";

function PresaleMain({ InitialNFTList, initialItemsCount }) {
  const [isloading, setIsLoading] = useState(true);
  const [NFTList, setNFTList] = useState([]);
  const [itemsCount, setItemsCount] = useState(1);
  const [lastPayload, setLastPayload] = useState({});

  useEffect(() => {
    setNFTList(InitialNFTList);
    setIsLoading(false);
  }, [InitialNFTList]);

  useEffect(() => {
    setItemsCount(initialItemsCount);
  }, [initialItemsCount]);

  const getItems = async (payload) => {
    setIsLoading(true);
    setLastPayload(payload);

    try {
      const data = await getFilterNFTs({
        ...payload,
      });

      if (data.itemList) {
        setNFTList(data.itemList);
        setItemsCount(data.itemsCount);
        setIsLoading(false);
      }
    } catch (err) {
      toast.error("Somthing Went Wrong !");
      setIsLoading(false);
    }
  };

  console.log(NFTList)

  return (
    <div className={styles["presale-main"]}>
      <SectionLayout>
        {{
          title: (
            <>
              <span>Presale</span>NFTs
            </>
          ),
          description:
            "We are bringing this project to a level of excellence that a cool feature will be released where players will be able to avail of quality and highly valued NFTs. Please participate in our Presale and be our Pioneer.",
          main: (
            <PresaleFilter
              onGetItems={getItems}
              itemsCount={itemsCount}
              onSetItemsCount={(num) => setItemsCount(num)}
            >
              {isloading ? (
                <Loader />
              ) : (
                <>
                  {NFTList.length <= 0 ? (
                    <h4>There Is No NFT in this Category !</h4>
                  ) : (
                    <PresaleNFTList
                      NFTList={NFTList}
                      onUpdateList={() => getItems(lastPayload)}
                    />
                  )}
                </>
              )}
            </PresaleFilter>
          ),
        }}
      </SectionLayout>
      <UIStar />
    </div>
  );
}

export default PresaleMain;
