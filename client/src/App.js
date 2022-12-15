import React from "react";
import styles from "./app.module.scss";
import variables from "./variables/variables";
import Header from "./components/Header/Header";
import SingleTimer from "./components/SingleTimer/SingleTimer";
import TradeRoom from "./components/TradeUsers/TradeRoom";

function App() {
  const [users, setUsers] = React.useState([]);

  //  Отсчет таймера, минуты
  const timeCountdown = variables.TIME_LIMIT_MIN * 60 * 1000;

  // Проверяем наличие пользователей
  React.useEffect(() => {
    async function checkUsers() {
      const response = await fetch(variables.URL + variables.TRADERS);
      if (response.ok) {
        const users = await response.json();
        setUsers(users);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }
    checkUsers();
  }, []);

  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <Header />
      </header>

      <article className={styles.trade_room}>
        {/* <SingleTimer  timeCountdown={ time}/> */}

        <TradeRoom users={users} timeCountdown={timeCountdown} />
      </article>
    </main>
  );
}

export default App;
