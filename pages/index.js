import { Fragment, useEffect } from "react";
import Head from "next/head";
import HomeMain from "components/home/HomeMain";
import { getHomeNFTs } from "helpers/api-utils";
import { useDispatch } from "react-redux";
import { nftListActions } from "store/nftlist-slice";

function Home({NFTList}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nftListActions.setHomeNFTList(NFTList));
  }, [NFTList]);

  return (
    <Fragment>
      <Head>
        <title>Space Six</title>
        <meta
          name="description"
          content="As part of the SpaceSix ecosystem, our competent developers designed this 'Explore-to-Earn' game to provide multiple methods of earning in addition to entertaining and providing you with endless hours of fun."
        />
      </Head>
      <HomeMain />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  let homeNFTList = await getHomeNFTs();

  return {
    props: { NFTList: homeNFTList },
    revalidate: 60 * 60, // 1hour
  };
}

export default Home;
