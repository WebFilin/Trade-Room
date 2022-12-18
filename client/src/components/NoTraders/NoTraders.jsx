import React from "react";
import styles from "./noTraders.module.scss";
import Timer from "../Timer/Timer";
import shortid from "shortid";

function SingleTimer({ timeCountdown, dataMenu }) {
  return (
    <section className={styles.wrapper}>
      <section>
        <table className={styles.table}>
          <tbody className={styles.table_body}>
            <tr>
              <td>{dataMenu[0]}</td>
              <td>
                <Timer timeCountdown={timeCountdown} />
              </td>
            </tr>
            {dataMenu.slice(1).map((item) => {
              return (
                <tr key={shortid.generate()}>
                  <td>{item}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default SingleTimer;
