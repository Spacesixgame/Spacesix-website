import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import {
  SiTwitter,
  SiTelegram,
  SiYoutube,
  SiMedium,
  SiDiscord,
} from "react-icons/si";
import { TiArrowSortedUp } from "react-icons/ti";
import UIStar from "./UIStar";
import { Heading } from "@chakra-ui/react";
import ImageUI from "components/ui/ImageUI";

const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      icon: <SiTwitter className={styles.icon} />,
      link: "https://twitter.com/SpaceSixgame",
    },
    {
      name: "Telegram",
      icon: <SiTelegram className={styles.icon} />,
      link: "https://t.me/space6game",
    },
    {
      name: "Youtube",
      icon: <SiYoutube className={styles.icon} />,
      link: "https://www.youtube.com/channel/UCbQAd3QWLaBLmH7WR2HnMeg?sub_confirmation=1",
    },
    {
      name: "Medium",
      icon: <SiMedium className={styles.icon} />,
      link: "https://medium.com/@spacesixgame",
    },
    {
      name: "Discord",
      icon: <SiDiscord className={styles.icon} />,
      link: "https://discord.gg/qTtGrpmh",
    },
  ];

  const quickAccessItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "GamePlay",
      link: "/#roadmap",
    },
    {
      name: "Market Place",
      link: "/#roadmap",
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
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles["footer-container"]}>
      <div className={styles.cover}>
        <UIStar />
      </div>
      <button className={styles["scroll-up_action"]} onClick={scrollToTop}>
        <TiArrowSortedUp className={styles.icon} />
      </button>

      <Container className={styles["footer-content"]}>
        <Row>
          <Col md="3" lg="4" xl="4" className="mx-auto mb-4">
            <div className={styles["website-name"]}>
              {/* <Heading as="h3" size="lg" className={styles["brand-name"]}>
                Space six
              </Heading> */}
              <figure className={styles.figure}>
                <ImageUI src={"Logo.png"} width="120px" height="45px" />
              </figure>
            </div>
            <p className={styles["app-difinitions"]}>
              WE, as a company, strive to build a trustworthy, reliable, and
              transparent system, and YOU, as our players feel confident that
              our system is safe and secure. A fast-growing and developing
              SpaceSix Community is on its way to achieving its mission and
              vision.
            </p>

            <div className={styles["socials"]}>
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={styles["social-item"]}
                  target="_blank"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </Col>

          <Col md="3" lg="2" xl="3" className="mx-auto">
            <h6 className={styles["footer-col__title"] + " mb-4"}>
              Quick Access
            </h6>
            <div className={styles["footer-col__items"]}>
              {quickAccessItems.map((item, index) => (
                <div className={styles["footer-col__item"]} key={index}>
                  <Link href={item.link}>
                    <a target={item.newTab ? "_blank" : ""}> {item.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://www.spacesix.io/">
          Space Six
        </a>
      </div>
    </div>
  );
};

export default Footer;
