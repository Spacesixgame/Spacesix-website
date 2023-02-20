import SectionLayout from "components/ui/SectionLayout";
import React, { useEffect, useState } from "react";
import SocialMediaList from "./SocialMediaList";
import styles from "./SocialMedia.module.css";
import UIStar from "./UIStar";
import { Player } from "@lottiefiles/react-lottie-player";

const SocialMedia = () => {
  const [socialMedias, setsocialMedias] = useState([]);

  useEffect(() => {
    fetch("/api/static/socials")
      .then((response) => response.json())
      .then((res) => {
        setsocialMedias(res.socials);
      });
  }, []);

  return (
    <>
      <span id="social"></span>
      <SectionLayout className={styles["social-layout"]}>
        {{
          title: (
            <>
              Follow us on <span>Social Media</span>
            </>
          ),
          main: (
            <>
              <SocialMediaList socialList={socialMedias} />
              <UIStar />
            </>
          ),
        }}
      </SectionLayout>
    </>
  );
};

export default SocialMedia;
