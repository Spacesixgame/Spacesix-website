import styles from "./CustomRadioOption.module.css";

function CustomRadioOption(props) {
  const { selected, onChange, text, value } = props;

  let isChecked = value === selected;

  return (
    <label
      className={
        styles.container + " " + (isChecked ? styles["checked-option"] : "")
      }
    >
      <input
        type="radio"
        id={value}
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      {text}
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default CustomRadioOption;
