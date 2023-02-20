import React, { useEffect, useState } from "react";
import PresaleMain from "components/presale/PresaleMain";
import Head from "next/head";
import { getFilterNFTs } from "helpers/api-utils";
import CheckConnectionAlarm from "components/ui/CheckConnectionAlarm";
import Loader from "components/ui/Loader";

function Presale(props) {
  // const allNFTs = props.allNFTs;
  // const itemsCount = props.itemsCount;
  const [isLoaded, setisLoaded] = useState(false);

  const [allNFTs, setallNFTs] = useState([]);
  const [itemsCount, setitemsCount] = useState([]);

  useEffect(() => {
    const test = async () => {
      const data = await getFilterNFTs({ page: 1, limit: 12 });
      setisLoaded(true);
      setallNFTs(data.itemList);
      setitemsCount(data.itemsCount);
    };

    test();
  }, []);

  var presaleBody;
  if (!isLoaded) {
    presaleBody = <Loader style={{ paddingTop: "10%" }} />;
  } else if (allNFTs == null) {
    presaleBody = <CheckConnectionAlarm />;
  } else {
    presaleBody = (
      <PresaleMain InitialNFTList={allNFTs} initialItemsCount={itemsCount} />
    );
  }

  return (
    <>
      <Head>
        <title>Presale</title>
        <meta
          name="description"
          content="As part of the SpaceSix ecosystem, our competent developers designed this 'Explore-to-Earn' game to provide multiple methods of earning in addition to entertaining and providing you with endless hours of fun."
        />
      </Head>
      {presaleBody}
    </>
  );
}

// export async function getServerSideProps(context) {
//   const data = await getFilterNFTs({ page: 1, limit: 12 });

//   let count = data.itemsCount;
//   let list = data.itemList;

//   return {
//     props: { allNFTs: list, itemsCount: count }, // will be passed to the page component as props
//   };
// }

export default Presale;
