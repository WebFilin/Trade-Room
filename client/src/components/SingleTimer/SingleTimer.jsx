import React from "react";
import styles from "./singleTimer.module.scss";
import Timer from "../Timer/Timer";
import variables from "../../variables/variables";
import shortid from "shortid";

function SingleTimer({ timeCountdown }) {
  //   Меню команты торгов
  const [dataMenu, setDataMenu] = React.useState([]);

  React.useEffect(() => {
    async function getTitlesMenuRoom() {
      const response = await fetch(variables.URL + variables.TITLES_MENU_ROOM);
      if (response.ok) {
        const arrTraders = await response.json();

        delete arrTraders[0]._id;

        const arrValues = Object.values(arrTraders[0]);

        setDataMenu(arrValues);
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
            {dataMenu.map((item) => {
              return (
                <tr key={shortid.generate()}>
                  <td>{item}</td>
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
