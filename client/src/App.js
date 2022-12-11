import React from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import SidebarTradeRoom from "./components/SidebarTradeRoom/SidebarTradeRoom";
function App() {
  // Адрес сервера
  const fetchUrl = "http://localhost:4000/";

  React.useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <Header />
      </header>

      <section className={styles.trade_room}>
        <SidebarTradeRoom />
        hjhjhjh
      </section>
    </main>
  );
}

export default App;
