import React from "react";
import styles from "./DashboardSidebar.module.css";
import SidebarAccount from "./SidebarAccount";
import SidebarDrawer from "./SidebarDrawer";
import SidebarLinks from "./SidebarLinkList";
// import SidebarLogo from "./SidebarLogo";

const DashboardSidebar = () => {
  const sidebarContent = (
    <>
      {/* /* <SidebarLogo /> */}
      <SidebarAccount />
      <SidebarLinks />
    </>
  );
  return (
    <>
      <div className={styles["sidebar-small"]}>
        <SidebarDrawer>{sidebarContent}</SidebarDrawer>
      </div>
      <div className={styles["sidebar-large"]}>{sidebarContent}</div>
    </>
  );
};

export default DashboardSidebar;
