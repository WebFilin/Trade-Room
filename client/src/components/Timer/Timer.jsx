import React from "react";
import styles from "./timer.module.scss";
import Countdown, { zeroPad } from "react-countdown";

function Timer({ timeCountdown }) {
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Countdown date={Date.now() + timeCountdown} renderer={renderer} />
      );
    } else {
      return (
        <div className={styles.timer}>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </div>
      );
    }
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.body}>
        <Countdown date={Date.now() + timeCountdown} renderer={renderer} />
      </section>
    </section>
  );
}

export default Timer;
