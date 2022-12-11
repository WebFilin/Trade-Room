import React from "react";
import styles from "./header.module.scss";

function Header() {
  // Моковые данные - получать от сервера
  const titleTrade = "Тестовые торги на аппарат ЛОТОС №2033564";
  const dataTrade = "09.11.2020";
  const timeTrade = "07:00";
  const warning =
    "Уважаемые участники, во время вашего хода вы можете изменить параметры торгов указанные в таблице:";

  return (
    <article className={styles.wrapper}>
      <section className={styles.title_page}>
        <div className={styles.title_main}>
          Ход торгов
          <span className={styles.title_request}>
            {`${titleTrade} (${dataTrade} ${timeTrade})`}
          </span>
        </div>
        <div className={styles.title_warning}>
          <h5>{warning} </h5>
        </div>
      </section>
    </article>
  );
}

export default Header;
