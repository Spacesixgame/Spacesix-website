import React from "react";
import styles from "./SidebarDrawer.module.css";
import {
  Drawer,
  DrawerBody,
  //   DrawerFooter,
  //   DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  //   Input,
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
import { BiMenu } from "react-icons/bi";

const SidebarDrawer = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button className={styles.oppener} ref={btnRef} onClick={onOpen}>
        {/* <HamburgerIcon w="9" h="8" /> */}
        <BiMenu className={styles.icon} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        className={styles.drawer}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent className={styles.content}>
          <DrawerCloseButton />
          <DrawerBody className={styles.body}>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
