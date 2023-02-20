import React from "react";
import styles from "./DashboardLayout.module.css";
// import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <DashboardSidebar /> 
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
