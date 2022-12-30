import React from "react";
import styles from "./app.module.scss";
import server from "./constants/server";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import TradersRoom from "./components/TradersRoom/TradersRoom";
import ManyTraders from "./components/ManyTraders/ManyTraders";
import Button from "./components/Button/Button";
import { API } from "./components/API/API";

function App() {
  const [traders, setTraders] = React.useState([]);
  const [dataMenu, setDataMenu] = React.useState([]);
  const [isLoadTraders, setIsLoadTraders] = React.useState(true);
  const [isLoadMenu, setIsLoadMenu] = React.useState(true);

  // Получаем пользователей и пункты меню комнаты
  React.useEffect(() => {
    async function getTitlesMenuRoom() {
      const arrValuesTitles = await API(
        server.TITLES_MENU_ROOM,
        "Ошибка загрузки параметров лота:"
      );

      const arrValues = Object.values(...arrValuesTitles).slice(1);
      setDataMenu(arrValues);
      setIsLoadMenu(false);
    }

    getTitlesMenuRoom();
    getTraders();
  }, []);

  async function getTraders() {
    const allTraders = await API(
      server.TRADERS,
      "Ошибка загрузки компаний-участников:"
    );

    setTraders(allTraders);
    setIsLoadTraders(false);
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
        <p>Тестирование режимов работы комнаты</p>
        <Button title="Все трейдеры" callback={allTraders} isDisabled={false} />
        <Button title="Нет трейдеров" callback={noTraders} isDisabled={false} />
        <ManyTraders limitTraders={getLimitTraders} />
      </section>
    </main>
  );
}

export default App;
