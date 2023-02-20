import DashboardLayout from "components/dashboard/DashboardLayout";
import TicketsMain from "components/dashboard/tickets";
import Head from "next/head";
import React from "react";

function Tickets() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="User Dashboard!" />
      </Head>

      <DashboardLayout>
        <TicketsMain />
      </DashboardLayout>
    </>
  );
}

export default Tickets;
