import React, { Fragment } from "react";
import styles from "./NavbarLinks.module.css";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import Contracts from "./contracts/Contracts";

const NavbarLinks = ({ navigations }) => {
  const router = useRouter();

  return (
    <Nav className={styles["nav-links"]}>
      {navigations.map((nav, index) => (
        <Fragment key={index}>
          <Nav.Link
            href={nav.link}
            target={nav.newTab ? "_blank" : ""}
            className={
              router.pathname === nav.link
                ? styles["nav-link"] + " " + styles["active"]
                : styles["nav-link"]
            }
          >
            <p>{nav.name}</p>
            <span></span>
          </Nav.Link>
        </Fragment>
      ))}
      <Nav.Link
        href="/dashboard/my_collection"
        id={styles["mycollection-link"]}
        className={
          router.pathname === "/dashboard/my_collection"
            ? styles["nav-link"] + " " + styles["active"]
            : styles["nav-link"]
        }
      >
        <p>Dashboard</p>
        <span></span>
      </Nav.Link>
    </Nav>
  );
};

export default NavbarLinks;
