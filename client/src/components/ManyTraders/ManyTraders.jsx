import React from "react";
import styles from "./manyTraders.module.scss";
import server from "../../constants/server";
import constans from "../../constants/constants";
import Button from "../Button/Button";

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
        server.URL + server.LIMIT_TRADERS_URL + server.QUERY_LIMIT + `${limit}`
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
    <div className={styles.wrapper}>
      <form className={styles.body}>
        <input
          ref={ref}
          className={styles.input}
          type="number"
          onChange={handllerInput}
        ></input>

        <Button title=" Несколько трейдеров" callback={someTraders} />
      </form>
      <span className={styles.worning}>
        {limit > constans.TRADERS_LIMIT ? "Превышено число трейдеров" : null}
      </span>
    </div>
  );
}

export default ManyTraders;
