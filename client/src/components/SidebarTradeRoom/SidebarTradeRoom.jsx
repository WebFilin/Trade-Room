import React from "react";
import styles from "./sidebarTradeRoom.module.scss";

function Header() {
  // Моковые данные - получать от сервера
  const dataMenu = [
    { id: 1, title: "Наличие комплекса мероприятий" },
    { id: 2, title: "Срок изготовления лота, дней" },
    { id: 3, title: "Гарантийные обязательства" },
    { id: 4, title: "Условия оплаты" },
    { id: 5, title: "Стоимость изготовления лота руб (без НДС)" },
    { id: 6, title: "Действия" },
  ];

  return (
    <article className={styles.wrapper}>
      <section className={styles.move}>Ход</section>
      <section className={styles.parameters_requirements}>
        Параметры и требования
      </section>
      <section className={styles.sidebar}>
        {dataMenu.map(({ id, title }) => {
          return <div className={styles.lot_params} key={id}>{title}</div>;
        })}
      </section>
    </article>
  );
}

export default Header;
