import TicketsHeader from "./TicketsHeader";
import styles from "./styles.module.css";
import NewTicket from "./new_ticket/NewTicket";
import TicketsList from "./ticket_list/TicketsList";
import React, { useEffect, useState } from "react";
// import { VscTrash } from "react-icons/vsc";
import { getAllTickets } from "helpers/api-utils";
import { useSelector } from "react-redux";
import Loader from "components/ui/Loader";

const TicketsMain = () => {
  const [ticketList, setTicketList] = useState([]);
  const account = useSelector((state) => state.wallet.address);
  const [isLoading, setIsLoading] = useState(true);

  const getTicketList = () => {
    getAllTickets().then((res) => {
      setTicketList(res);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (account) {
      getTicketList();
    }
  }, []);

  if (!account) {
    return <h4 className={styles["wallet-warning"]}>Connect your wallet !</h4>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.card}>
      <TicketsHeader />
      <div className={styles.main}>
        <NewTicket onUpdateTicketList={getTicketList} />
        <TicketsList ticketList={ticketList} />
      </div>
    </div>
  );
};

export default TicketsMain;
