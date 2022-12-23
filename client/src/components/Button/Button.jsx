import React from "react";
import styles from "./button.module.scss";

function Button({ title, callback, isDisabled }) {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={isDisabled ? styles.disabled : styles.btn}
      onClick={callback}
    >
      {title}
    </button>
  );
}

export default Button;
