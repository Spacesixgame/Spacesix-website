import React, { Fragment } from "react";
import Image from "next/image";
import { imageLoader, myloader } from "loader";
import styles from './ImageUI.module.css';

const ImageUI = (props) => {
  return (
    <figure className={`${styles.figure} ${props.className}`}>
      <Image loader={props.noloader ? myloader : imageLoader} {...props} />
    </figure>
  );
};

export default ImageUI;
