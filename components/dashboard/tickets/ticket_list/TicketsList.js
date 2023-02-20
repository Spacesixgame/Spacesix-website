import React from "react";
import styles from "./TicketsList.module.css";
import TicketItem from "./TicketItem";

const TicketsList = ({ ticketList }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.head}>
          <th className={styles.topic}>Topic</th>
          <th className={styles.date}>Date</th>
          {/* <th></th> */}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {ticketList.map((item) => {
          return (
            <TicketItem
              topic={item.topic}
              createDate={item.createdAt}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TicketsList;
