import React from "react";
import styles from "./singleTimer.module.scss";
import Timer from "../Timer/Timer";

function SingleTimer({ timeLimitMin }) {
  return (
    <section className={styles.wrapper}>
      <section className={styles.title_page}>
        <Timer timeLimitMin={timeLimitMin} />
      </section>
    </section>
  );
}

export default SingleTimer;
