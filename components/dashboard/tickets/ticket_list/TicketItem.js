// import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
// import { VscTrash } from "react-icons/vsc";
import styles from "./TicketItem.module.css";

const TicketItem = ({ topic, createDate, id }) => {
  function getDateFormat(mydate) {
    let date = new Date(mydate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + "/" + month + "/" + dt;
  }

  return (
    <tr className={styles.item}>
      <td className={styles.topic}>
        <Link href={"/dashboard/tickets/" + id}>{topic}</Link>
      </td>
      <td className={styles.date}>
        <p>{getDateFormat(createDate)}</p>
      </td>
      {/* <td className={styles.trash}>
        <Button>
          <VscTrash className={styles.icon} />
        </Button>
      </td> */}
    </tr>
  );
};

export default TicketItem;
