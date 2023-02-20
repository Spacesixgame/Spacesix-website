import React, { useEffect, useState } from "react";
import styles from "./SnowFlakes.module.css";

const SnowFlakes = () => {
  const [snowFlakes, setSnowFlakes] = useState(null);
  useEffect(() => {
    var snowfalls = [];
    for (var i = 0; i < 120; i++) {
      let size = Math.floor(Math.random() * (12 - 5 + 1)) + 5 + "px";
      snowfalls.push(
        <span
          className={styles["snowflake"]}
          style={{
            left: Math.floor(Math.random() * (100 - 1 + 1)) + 1 + "%",
            animationDelay: Math.floor(Math.random() * (8 - 0)) + 0 + "s",
            animationDuration:
              Math.floor(Math.random() * (70 - 20 + 1)) + 20 + "s",
            width: size,
            height: size,
            opacity: (Math.random() + 0.1).toFixed(2),
          }}
          key={"snowflake" + i}
        ></span>
      );
    }
    setSnowFlakes(snowfalls);
  }, []);

  return <>{snowFlakes}</>;
};

export default SnowFlakes;
