import React from "react";
import styles from "./loader.module.scss";

function Loader() {
  return (
    <section className={styles.wrapper}>
      <span className={styles.loader}></span>
    </section>
  );
}

export default Loader;
