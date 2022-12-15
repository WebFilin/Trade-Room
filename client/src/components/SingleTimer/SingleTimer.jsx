import React from "react";
import styles from "./singleTimer.module.scss";
import Timer from "../Timer/Timer";
import variables from "../../variables/variables";

function SingleTimer({ timeCountdown }) {
  //   Меню команты торгов
  const [dataMenu, setDataMenu] = React.useState({});

  React.useEffect(() => {
    async function getTitlesMenuRoom() {
      const response = await fetch(variables.URL + variables.TITLES_MENU_ROOM);
      if (response.ok) {
        const arrTraders = await response.json();
        setDataMenu(...arrTraders);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }

    getTitlesMenuRoom();
  }, []);

  return (
    <section className={styles.wrapper}>
      <section className={styles.body}>
        <Timer timeCountdown={timeCountdown} />
      </section>
      <section>
        <table className={styles.table}>
          <tbody className={styles.table_body}>
            <tr>
              <td>{dataMenu.move}</td>
            </tr>
            <tr>
              <td>{dataMenu.params}</td>
            </tr>
            <tr>
              <td>{dataMenu.setOfMeasures}</td>
            </tr>
            <tr>
              <td>{dataMenu.timeCreate}</td>
            </tr>
            <tr>
              <td>{dataMenu.guarantee}</td>
            </tr>
            <tr>
              <td>{dataMenu.payment}</td>
            </tr>
            <tr>
              <td>{dataMenu.price}</td>
            </tr>
            <tr>
              <td>{dataMenu.actions}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default SingleTimer;
