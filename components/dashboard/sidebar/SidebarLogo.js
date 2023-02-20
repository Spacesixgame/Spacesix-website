import { Button } from "@chakra-ui/react";
import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./SidebarLogo.module.css";

const SidebarLogo = () => {
  return (
    <Button>
      <ImageUI src={"logo.png"} width={"100"} height={"30"} />
    </Button>
  );
};

export default SidebarLogo;
