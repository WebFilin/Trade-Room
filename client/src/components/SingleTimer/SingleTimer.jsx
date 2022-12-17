import React from "react";
import styles from "./singleTimer.module.scss";
import Timer from "../Timer/Timer";
import variables from "../../variables/variables";
import shortid from "shortid";
import Loader from "../Loader/Loader";

function SingleTimer({ timeCountdown }) {
  //   Меню команты торгов
  const [dataMenu, setDataMenu] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [trMove, setTrMove] = React.useState({});

  React.useEffect(() => {
    async function getTitlesMenuRoom() {
      const response = await fetch(variables.URL + variables.TITLES_MENU_ROOM);
      if (response.ok) {
        const arrTraders = await response.json();

        setTrMove(arrTraders[0].move);

        const arrValues = Object.values(...arrTraders).slice(2);

        setDataMenu(arrValues);
        setIsLoading(false);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }

    getTitlesMenuRoom();
  }, []);

  return (
    <section className={styles.wrapper}>
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <table className={styles.table}>
            <tbody className={styles.table_body}>
              <tr>
                <td>{trMove}</td>
                <td>
                  <Timer timeCountdown={timeCountdown} />
                </td>
              </tr>
              {dataMenu.map((item) => {
                return (
                  <tr key={shortid.generate()}>
                    <td>{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </section>
  );
}

export default SingleTimer;
