import { useRouter } from "next/router";
import React from "react";
import styles from "./SidebarLinkItem.module.css";
import { ListIcon, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const SidebarLinkItem = ({ icon, name, link }) => {
  const router = useRouter();
  const activeLink = router.asPath.includes(link);

  return (
    <Link href={link}>
      <ListItem
        className={activeLink ? styles.active + " " + styles.item : styles.item}
      >
        <ListIcon as={icon} className={styles.icon} />
        {name}
      </ListItem>
    </Link>
  );
};

export default SidebarLinkItem;
