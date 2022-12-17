import React from "react";
import styles from "./app.module.scss";
import variables from "./variables/variables";
import Header from "./components/Header/Header";
import SingleTimer from "./components/SingleTimer/SingleTimer";
import TradeRoom from "./components/TradeUsers/TradeRoom";
import Loader from "./components/Loader/Loader";

function App() {
  const [traders, setTraders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //  Отсчет таймера, минуты
  const timeCountdown = variables.TIME_LIMIT_MIN * 60 * 1000;

  // Получаем пользователей
  React.useEffect(() => {
    getTraders();
  }, []);

  async function getTraders() {
    const response = await fetch(variables.URL + variables.TRADERS);
    if (response.ok) {
      const arrTraders = await response.json();
      setTraders(arrTraders);
      setIsLoading(false);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  // Тестовые функции для разных режимов работы комнаты
  function noTraders() {
    setTraders([]);
  }

  function threeTraders() {
    if (traders.length > 0) {
      const arrThreeTraders = traders.slice(0, 3);
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
          <TradeRoom traders={traders} timeCountdown={timeCountdown} />
        ) : (
          <SingleTimer timeCountdown={timeCountdown} />
        )}
      </article>
      {/* Секция тестовых кнопок */}
      <section className={styles.wrapper_btns}>
        <p>Кнопки для тестирования приложения</p>
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
