import { Button } from "react-bootstrap";
import React from "react";
// import styles from "./NavbarAccountDisconnect.module.css";
import { AiOutlineDisconnect } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "store/auth-actions";
import CustomModal from "components/ui/CustomModal";

const NavbarAccountDisconnect = () => {
  const dispatch = useDispatch();

  const disconnectAccount = () => {
    dispatch(logout());
  };
  return (
    <>
      <CustomModal>
        {{
          button: (
            <>
              <AiOutlineDisconnect className=" text-bold text-danger h5 m-0" />
            </>
          ),
          body: (
            <>
              <p className="m-0 ">Are you sure about this ?</p>
            </>
          ),
          footer: (
            <Button className="bg-danger border-0" onClick={disconnectAccount}>
              Discconnect
            </Button>
          ),
        }}
      </CustomModal>
    </>
  );
};

export default NavbarAccountDisconnect;
