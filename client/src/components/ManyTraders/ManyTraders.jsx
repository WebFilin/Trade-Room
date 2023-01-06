import React from "react";
import styles from "./manyTraders.module.scss";
import server from "../../constants/server";
import constans from "../../constants/constants";
import Button from "../Button/Button";

function ManyTraders({ limitTraders }) {
  const [limit, setLimit] = React.useState(0);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (limit > constans.TRADERS_LIMIT) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [limit]);

  function handllerInput(ev) {
    ev.preventDefault();

    const limit = Number(ev.target.value);

    setLimit(limit);
  }

  async function someTraders(ev) {
    ev.preventDefault();
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
  }

  function clearInput() {
    setLimit("");
    inputRef.current.value = "";
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        Введите число от 0 до {constans.TRADERS_LIMIT}
      </span>
      <form className={styles.body}>
        <input
          ref={inputRef}
          className={styles.input}
          type="number"
          onChange={handllerInput}
        ></input>

        <Button
          title="Несколько трейдеров"
          callback={someTraders}
          isDisabled={isDisabled}
        />
      </form>
      <p className={styles.warning}>
        {limit > constans.TRADERS_LIMIT ? constans.WARNING : null}
      </p>
    </div>
  );
}

export default ManyTraders;
