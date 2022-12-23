import React from "react";
import styles from "./button.module.scss";

function Button({ title, callback }) {
  return (
    <button type="submit" className={styles.btn} onClick={callback}>
      {title}
    </button>
  );
}

export default Button;
