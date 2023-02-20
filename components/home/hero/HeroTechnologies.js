import ImageUI from "components/ui/ImageUI";
import React from "react";
import { Figure } from "react-bootstrap";
import styles from "./HeroTechnologies.module.css";

const HeroTechnologies = () => {
  const technologies = [
    {
      name: "blender",
      image: "technology-blender.png",
    },
    {
      name: "unity",
      image: "technology-unity.png",
    },
    {
      name: "solidiy",
      image: "technology-solidity.png",
    },
  ];

  return (
    <div className={styles["hero__technologies"]}>
      <p>Technologies</p>
      <ui className={styles["hero__technologies-tehnology-list"]}>
        {technologies.map((tech, index) => (
          <li key={index}>
            <Figure className={styles["technology-item"]}>
              <ImageUI
                src={tech.image}
                alt={tech.name}
                width="100%"
                height="50px"
                key={tech.name}
              />
            </Figure>
          </li>
        ))}
      </ui>
    </div>
  );
};

export default HeroTechnologies;
