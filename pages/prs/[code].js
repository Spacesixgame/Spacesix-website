import { Fragment, useEffect } from "react";
import Head from "next/head";
import HomeMain from "components/home/HomeMain";
import { useRouter } from "next/router";
import { authActions } from "store/auth-slice";
import { useDispatch } from "react-redux";
import { getHomeNFTs } from "helpers/api-utils";

function LoginWithCode(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const refralCode = router.query.code;

  useEffect(() => {
    dispatch(authActions.setReferralCode(refralCode));
  }, [refralCode]);

  return (
    <Fragment>
      <Head>
        <title>Space Six</title>
        <meta
          name="description"
          content="As part of the SpaceSix ecosystem, our competent developers designed this 'Explore-to-Earn' game to provide multiple methods of earning in addition to entertaining and providing you with endless hours of fun."
        />
      </Head>
      <HomeMain NFTList={props.NFTList} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { code: "SPACESIX-G1RVNSNQ00" } }],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  let homeNFTList = await getHomeNFTs();

  return {
    props: { NFTList: homeNFTList },
  };
}

export default LoginWithCode;
