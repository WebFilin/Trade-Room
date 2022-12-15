import React from "react";
import styles from "./app.module.scss";
import variables from "./variables/variables";
import Header from "./components/Header/Header";
import SingleTimer from "./components/SingleTimer/SingleTimer";
import TradeRoom from "./components/TradeUsers/TradeRoom";

function App() {
  const [traders, setTraders] = React.useState([]);

  //  Отсчет таймера, минуты
  //   const timeCountdown = variables.TIME_LIMIT_MIN * 60 * 1000;
  const timeCountdown = 4000;

  // Проверяем наличие пользователей
  React.useEffect(() => {
    async function getTraders() {
      const response = await fetch(variables.URL + variables.TRADERS);
      if (response.ok) {
        const arrTraders = await response.json();
        setTraders(arrTraders);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }

    getTraders();
  }, []);

  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <Header />
      </header>

      <article className={styles.trade_room}>
        {traders.length > 0 ? (
          <TradeRoom traders={traders} timeCountdown={timeCountdown} />
        ) : (
          <SingleTimer timeCountdown={timeCountdown} />
        )}
      </article>
    </main>
  );
}

export default App;
