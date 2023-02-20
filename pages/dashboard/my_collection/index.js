import React from "react";
import Head from "next/head";
import DashboardLayout from "components/dashboard/DashboardLayout";
import MyCollectionMain from "components/dashboard/my_collection/MyCollectionMain";

function MyCollection() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="User Dashboard!" />
      </Head>
      <DashboardLayout>
        <MyCollectionMain />
      </DashboardLayout>
    </>
  );
}

export default MyCollection;
