import React from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import SidebarTradeRoom from "./components/SidebarTradeRoom/SidebarTradeRoom";
import SingleTimer from "./components/SingleTimer/SingleTimer";
import TradeUsers from "./components/TradeUsers/TradeUsers";

function App() {
  const [users, setUsers] = React.useState([]);

  const URL = "http://localhost:4000/";

  //Старт таймера в минутах
  const TIME_LIMIT_MIN = 2;

  //   Проверяем наличие пользователей
  React.useEffect(() => {
    async function checkUsers() {
      const response = await fetch(URL);
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

      <section className={styles.trade_room}>
        <SidebarTradeRoom />
        {/* {users.length > 0 ? <TradeUsers users={users} timeLimitMin={TIME_LIMIT_MIN} /> : <SingleTimer />}
         */}
        {/* <SingleTimer timeLimitMin={TIME_LIMIT_MIN} /> */}

        <TradeUsers users={users} timeLimitMin={TIME_LIMIT_MIN} />
      </section>
    </main>
  );
}

export default App;
