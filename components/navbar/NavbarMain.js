import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import styles from "./NavbarMain.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import ImageUI from "components/ui/ImageUI";
import UserAccount from "./account";
import { Offcanvas } from "react-bootstrap";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  const router = useRouter();

  const navigations = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "GamePlay",
      link: "/#roadmap",
    },
    {
      name: "Presale",
      link: "/presale",
    },

    {
      name: "White Paper",
      link: "https://space-six.gitbook.io/whitepaper-space-six/",
      newTab: true,
    },
    {
      name: "Roadmap",
      link: "/#roadmap",
    },
    {
      name: "Social",
      link: "/#social",
    },
    {
      name: "Contracts",
      link: "https://space-six.gitbook.io/whitepaper-space-six/blockchain/contract",
      newTab: true,
    },
  ];

  return (
    <Navbar className={styles.navigation} expand="lg">
      <Container className={styles.container}>
        <Navbar.Brand href="/" className={styles["brand-logo"]}>
          <ImageUI
            alt="logo"
            src={"Logo.png"}
            width="100px"
            height="30px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <div className={` d-lg-none ${styles["user-account"]} `}>
          <UserAccount />
        </div>

        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className={styles["navbar-toggler__button"]}
        >
          <BiMenuAltRight className={styles.icon} />
        </Navbar.Toggle>

        <Navbar.Offcanvas
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          className={styles["Offcanvas"]}
        >
          <Offcanvas.Header closeButton>
             <ImageUI src="Logo.png" width="100px" height="30px" />
              </Offcanvas.Header>
          <Offcanvas.Body>
            <NavbarLinks navigations={navigations} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <div className="d-none d-lg-block">
          <UserAccount />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
