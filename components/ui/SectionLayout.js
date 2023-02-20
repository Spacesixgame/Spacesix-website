import { Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./SectionLayout.module.css";

const SectionLayout = (props) => {
  return (
    <div className={styles["section-layout"] + " " + props.className} id={props.id}>
      <div className={styles["header"]}>
        <Heading className={styles["title"]}>{props.children.title}</Heading>
        {props.children.description && <p>{props.children.description}</p>}
      </div>
      <div className={styles["main"]}>{props.children.main}</div>
    </div>
  );
};

export default SectionLayout;
