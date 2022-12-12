import React from "react";
import styles from "./timer.module.scss";
import Countdown, { zeroPad } from "react-countdown";

function Timer({ timeLimitMin }) {
  // Расчитываем время в минутах
  //   const time = timeLimitMin * 60 * 1000;
  let time = 10000;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Countdown date={Date.now() + time} renderer={renderer} />;
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
        <Countdown date={Date.now() + time} renderer={renderer} />
      </section>
    </section>
  );
}

export default Timer;
