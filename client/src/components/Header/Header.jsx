import React from "react";
import styles from "./header.module.scss";
import variables from "../../variables/variables";

function Header() {
  const [title, setTitle] = React.useState(null);

  const warning =
    "Уважаемые участники, во время вашего хода вы можете изменить параметры торгов указанные в таблице:";

  // Проверяем наличие пользователей
  React.useEffect(() => {
    async function getTraders() {
      const response = await fetch(variables.URL + variables.ROOM_TITLE);
      if (response.ok) {
        const arrTraders = await response.json();
        setTitle(arrTraders);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }

    getTraders();
  }, []);

  return (
    <article className={styles.wrapper}>
      <section className={styles.title_page}>
        <div className={styles.title_main}>
          Ход торгов
          <span className={styles.title_request}>{title}</span>
        </div>
        <div className={styles.title_warning}>
          <h5>{warning} </h5>
        </div>
      </section>
    </article>
  );
}

export default Header;
