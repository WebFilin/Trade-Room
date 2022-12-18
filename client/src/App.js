import React from "react";
import styles from "./app.module.scss";
import variables from "./variables/variables";
import Header from "./components/Header/Header";
import SingleTimer from "./components/NoTraders/NoTraders";
import TradeRoom from "./components/TradeRoom/TradeRoom";
import Loader from "./components/Loader/Loader";

function App() {
  const [traders, setTraders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [dataMenu, setDataMenu] = React.useState([]);

  //  Отсчет таймера, минуты
  const timeCountdown = variables.TIME_LIMIT_MIN * 60 * 1000;

  // Получаем пользователей и пункты меню комнаты
  React.useEffect(() => {
    getTitlesMenuRoom();
    getTraders();
  }, []);

  async function getTraders() {
    const response = await fetch(variables.URL + variables.TRADERS);
    if (response.ok) {
      const arrTraders = await response.json();

      setTraders(arrTraders);
      setIsLoading(false);
    } else {
      alert("Ошибка загрузки компаний - участников: " + response.status);
    }
  }

  async function getTitlesMenuRoom() {
    const response = await fetch(variables.URL + variables.TITLES_MENU_ROOM);
    if (response.ok) {
      const arrTraders = await response.json();

      const arrValues = Object.values(...arrTraders).slice(1);

      setDataMenu(arrValues);
      setIsLoading(false);
    } else {
      alert("Ошибка загрузки параметров лота: " + response.status);
    }
  }

  // Тестовые функции для разных режимов работы комнаты
  function noTraders() {
    setTraders([]);
  }

  function threeTraders() {
    if (traders.length > 0) {
      const arrThreeTraders = traders.slice(2);
      setTraders(arrThreeTraders);
    } else {
      alert("Нет трейдеров на торгах");
    }
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
        {isLoading ? (
          <Loader />
        ) : traders.length > 0 ? (
          <TradeRoom
            traders={traders}
            timeCountdown={timeCountdown}
            dataMenu={dataMenu}
          />
        ) : (
          <SingleTimer timeCountdown={timeCountdown} dataMenu={dataMenu} />
        )}
      </article>
      {/* Секция тестовых кнопок */}
      <section className={styles.wrapper_btns}>
        <p>Тестирование комнаты торгов</p>
        <button className={styles.btn} onClick={allTraders}>
          Все трейдеры
        </button>

        <button className={styles.btn} onClick={noTraders}>
          Нет трейдеров
        </button>
        <button className={styles.btn} onClick={threeTraders}>
          Три трейдера
        </button>
      </section>
    </main>
  );
}

export default App;
