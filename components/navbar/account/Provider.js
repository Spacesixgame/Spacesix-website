import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./Provider.module.css";

const Provider = ({ name, logo, description, onClick }) => {
  const providerClickHandler = () => {
    onClick(name);
  };
  return (
    <div className={styles["provider-item"]} onClick={providerClickHandler}>
      <p> {name}</p>
      <ImageUI src={logo} width="35px" height="35px" />
    </div>
  );
};

export default Provider;
