import React, { useEffect, useRef, useState } from "react";
import styles from "./NewTicketForm.module.css";

const NewTicketForm = ({ title, message }) => {
  // const title = useRef("");
  // const [ticketTitles, setTicketTitles] = useState([
  //   { title: "write my own title", value: "custom" },
  // ]);
  // const [selectedItem, setSelectedItem] = useState([{}]);

  // function selectItemTitle(item) {
  //   let array = [];
  //   array.push(item);
  //   setSelectedItem(array);
  // }

  return (
    <div className={styles.form}>
      <p>How Can Space Six Help you? Write it in the box.</p>
      {/* <CustomMenuOptionGroup
        dropdownList={ticketTitles}
        menuButtonLabel="Title"
        type={"radio"}
        labelBg={"#212121"}
        selectedItems={selectedItem}
        key={"ticketTitlesDropdown"}
        onSelectItemHandler={selectItemTitle}
        menuButtonTitle="Choose Your Ticket Title"
      /> */}
      <div className={styles["input-group"]}>
        <span>Title</span>
        <input placeholder="Choose Your Ticket Title" ref={title} />
      </div>
      <textarea placeholder="Your Problem..." ref={message} />
    </div>
  );
};

export default NewTicketForm;
