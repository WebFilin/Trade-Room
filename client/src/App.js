import React from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import SidebarTradeRoom from "./components/SidebarTradeRoom/SidebarTradeRoom";
import SingleTimer from "./components/SingleTimer/SingleTimer";
import TradeUsers from "./components/TradeUsers/TradeUsers";

function App() {
  const [users, setUsers] = React.useState([]);

  const URL = "http://localhost:4000/";

  //   Проверяем наличие пользователей
  React.useEffect(() => {
    async function checkUsers() {
      const response = await fetch(URL);
      if (response.ok) {
        const users = await response.json();
        console.log(users);
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
        {users.length > 0 ? <TradeUsers users={users} /> : <SingleTimer />}
      </section>
    </main>
  );
}

export default App;
