import { List } from "@chakra-ui/react";

import React from "react";
import { HiOutlineCollection } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import SidebarLinkItem from "./SidebarLinkItem";
import styles from "./SidebarLinkList.module.css";

const SidebarLinks = () => {
  const sidebarLink = [
    {
      name: "My Collections",
      icon: HiOutlineCollection,
      link: "/dashboard/my_collection",
    },
    {
      name: "Tickets",
      icon: TbMessageCircle,
      link: "/dashboard/tickets",
    },
  ];
  return (
    <div className={styles.links}>
      <p className={styles.title}>Dashboard</p>
      <List spacing={3}>
        {sidebarLink.map((item) => (
          <SidebarLinkItem
            key={"sidebar-link" + item.link}
            link={item.link}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </List>
    </div>
  );
};

export default SidebarLinks;
