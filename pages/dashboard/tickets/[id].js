import DashboardLayout from "components/dashboard/DashboardLayout";
import TicketChat from "components/dashboard/tickets/chat";
import Head from "next/head";
import React from "react";

const TicketItem = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="User Dashboard!" />
      </Head>
      <DashboardLayout>
        <TicketChat />
      </DashboardLayout>
    </>
  );
};

export default TicketItem;
