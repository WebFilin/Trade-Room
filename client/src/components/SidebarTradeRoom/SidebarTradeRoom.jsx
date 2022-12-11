import React from "react";
import styles from "./sidebarTradeRoom.module.scss";

function Header() {
  const dataMenu = [
    "Наличие комплекса мероприятий",
    "Срок изготовления лота, дней",
    "Гарантийные обязательства",
    "Условия оплаты",
    "Стоимость изготовления лота руб (без НДС)",
    "Действия",
  ];

  return (
    <article className={styles.wrapper}>
      <section className={styles.move}>Ход</section>
      <section className={styles.parameters_requirements}>
        Параметры и требования
      </section>
      <section className={styles.sidebar}>
        {dataMenu.map((items) => {
          return <div>{items}</div>;
        })}
      </section>
    </article>
  );
}

export default Header;
