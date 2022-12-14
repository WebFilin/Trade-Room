import React from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import SingleTimer from "./components/SingleTimer/SingleTimer";
import TradeRoom from "./components/TradeUsers/TradeRoom";

function App() {
  const [users, setUsers] = React.useState([]);

  // Отсчет таймера, минуты
  const TIME_LIMIT_MIN = 2;

  const URL = "http://localhost:4000";
  const USERS = "/users";

  // Заголовки лотов торгов
  const TITLES_TRADE = "/titles_trade";

  const time = TIME_LIMIT_MIN * 60 * 1000;

  // Проверяем наличие пользователей
  React.useEffect(() => {
    async function checkUsers() {
      const response = await fetch(URL + USERS);
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
        {/* <SingleTimer  timeLimitMin={ time}/> */}

        <TradeRoom users={users} timeLimitMin={time} />
      </article>
    </main>
  );
}

export default App;
