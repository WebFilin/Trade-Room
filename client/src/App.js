import React from "react";
import styles from "./app.module.scss";
import server from "./constants/server";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import TradersRoom from "./components/TradersRoom/TradersRoom";
import ManyTraders from "./components/ManyTraders/ManyTraders";

function App() {
  const [traders, setTraders] = React.useState([]);
  const [dataMenu, setDataMenu] = React.useState([]);
  const [isLoadTraders, setIsLoadTraders] = React.useState(true);
  const [isLoadMenu, setIsLoadMenu] = React.useState(true);

  // Получаем пользователей и пункты меню комнаты
  React.useEffect(() => {
    getTitlesMenuRoom();
    getTraders();
  }, []);

  async function getTraders() {
    const response = await fetch(server.URL + server.TRADERS);
    if (response.ok) {
      const allTraders = await response.json();

      setTraders(allTraders);
      setIsLoadTraders(false);
    } else {
      alert("Ошибка загрузки компаний - участников: " + response.status);
    }
  }

  async function getTitlesMenuRoom() {
    const response = await fetch(server.URL + server.TITLES_MENU_ROOM);
    if (response.ok) {
      const arrValuesTitles = await response.json();

      const arrValues = Object.values(...arrValuesTitles).slice(1);

      setDataMenu(arrValues);
      setIsLoadMenu(false);
    } else {
      alert("Ошибка загрузки параметров лота: " + response.status);
    }
  }

  // Получаем заданное количество трейдеров
  function getLimitTraders(sumTraders) {
    setTraders(sumTraders);
    setIsLoadTraders(false);
  }

  // Тестовые функции для разных режимов работы комнаты
  function noTraders() {
    setTraders([]);
  }

  function allTraders() {
    getTraders();
  }

  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <Header />
      </header>

      <article className={styles.trade_room}>
        {isLoadTraders && isLoadMenu ? (
          <Loader />
        ) : (
          <TradersRoom traders={traders} dataMenu={dataMenu} />
        )}
      </article>
      {/*Кнопки для тестирования приложения*/}
      <section className={styles.wrapper_btns}>
        <p>Тестирование комнаты торгов</p>
        <button className={styles.btn} onClick={allTraders}>
          Все трейдеры
        </button>

        <button className={styles.btn} onClick={noTraders}>
          Нет трейдеров
        </button>
        <ManyTraders limitTraders={getLimitTraders} />
      </section>
    </main>
  );
}

export default App;
