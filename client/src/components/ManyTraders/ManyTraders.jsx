import React from "react";
import styles from "./manyTraders.module.scss";
import server from "../../constants/server";
import constans from "../../constants/constants";

function ManyTraders({ limitTraders }) {
  const [limit, setLimit] = React.useState("");
  const ref = React.useRef();

  function handllerInput(ev) {
    ev.preventDefault();

    if (limit <= constans.TRADERS_LIMIT) {
      const limit = Number(ev.target.value);
      setLimit(limit);
    } else {
      clearInput();
    }
  }

  async function someTraders(ev) {
    ev.preventDefault();

    if (limit <= constans.TRADERS_LIMIT) {
      const response = await fetch(
        server.URL + server.LIMIT_TRADERS_URL + server.LIMIT + `${limit}`
      );

      if (response.ok) {
        const allTraders = await response.json();
        limitTraders(allTraders);
      } else {
        alert("Ошибка загрузки компаний - участников: " + response.status);
      }

      clearInput();
    } else {
      return;
    }
  }

  function clearInput() {
    setLimit("");
    ref.current.value = "";
  }

  return (
    <form className={styles.wrapper_some_traders}>
      <input
        ref={ref}
        className={styles.some_traders}
        type="number"
        onChange={handllerInput}
      ></input>
      <button type="submit" className={styles.btn} onClick={someTraders}>
        Несколько трейдеров
      </button>
      <p>
        {limit > constans.TRADERS_LIMIT ? "Превышено число трейдеров" : null}
      </p>
    </form>
  );
}

export default ManyTraders;
