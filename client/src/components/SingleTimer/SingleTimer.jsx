import React from "react";
import styles from "./singleTimer.module.scss";
import Timer from "../Timer/Timer";

function SingleTimer({timeCountdown }) {
  return (
    <section className={styles.wrapper}>
      <section className={styles.body}>
        <Timer timeCountdown={timeCountdown} />
      </section>
    </section>
  );
}

export default SingleTimer;
