import React from "react";
import styles from "./tableRowTimer.module.scss";
import shortid from "shortid";
import Timer from "../Timer/Timer";

function TableRowTimer({ arrTraders, timeCountdown, rowTitle }) {
  return (
    <tr className={styles.timer}>
      <td>{rowTitle}</td>
      {arrTraders.map(({ isMove }) => {
        return (
          <td key={shortid.generate()}>
            {isMove && <Timer timeCountdown={timeCountdown} />}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRowTimer;
