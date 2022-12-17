import React from "react";
import styles from "./tradeRoom.module.scss";
import shortid from "shortid";
import Timer from "../Timer/Timer";
import useInterval from "../useInterval/useInterval";
import variables from "../../variables/variables";

function TradeUsers({ traders, timeCountdown }) {
  const [arrTraders, setArrTraders] = React.useState([]);

  //   Переход хода
  const [stepBid, setStepBid] = React.useState(1);

  //   Меню команты торгов
  const [dataMenu, setDataMenu] = React.useState({});

  React.useEffect(() => {
    async function getTitlesMenuRoom() {
      const response = await fetch(variables.URL + variables.TITLES_MENU_ROOM);
      if (response.ok) {
        const arrTraders = await response.json();
        setDataMenu(...arrTraders);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }

    getTitlesMenuRoom();
  }, []);

  //   Отображаем таймер в первой ячейке при загрузке
  React.useEffect(() => {
    if (traders.length > 0) {
      traders[0].isMove = true;
    }
  }, [traders]);

  // Задаем интервал
  useInterval(() => {
    if (stepBid <= traders.length - 2) {
      setStepBid((setTime) => setTime + 1);
    } else {
      setStepBid((setTime) => (setTime = 0));
    }

    //Включаем блок таймера в заданной stepBid ячейке
    if (traders.length > 0) {
      traders.forEach((items, index) => {
        if (stepBid === index) {
          items.isMove = true;
        } else {
          items.isMove = false;
        }
      });
    }
  }, timeCountdown);

  React.useEffect(() => {
    setArrTraders(traders);
  }, [traders]);

  return (
    <section className={styles.wrapper}>
      <table className={styles.table}>
        <tbody className={styles.table_body}>
          <tr className={styles.table_td_timer}>
            <td>{dataMenu.move}</td>
            {arrTraders.map(({ isMove }) => {
              return (
                <td key={shortid.generate()}>
                  {isMove ? <Timer timeCountdown={timeCountdown} /> : null}
                </td>
              );
            })}
          </tr>

          <tr className={styles.table_row__user_name}>
            <td>{dataMenu.params}</td>
            {arrTraders.map(({ name, isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  {name}
                </td>
              );
            })}
          </tr>

          <tr>
            <td>{dataMenu.setOfMeasures}</td>
            {arrTraders.map(({ qualityStandards, isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  {qualityStandards}
                </td>
              );
            })}
          </tr>

          <tr>
            <td>{dataMenu.timeCreate}</td>
            {arrTraders.map(({ productionTime, isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  {productionTime}
                </td>
              );
            })}
          </tr>

          <tr>
            <td>{dataMenu.guarantee}</td>
            {arrTraders.map(({ guarantee, isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  {guarantee}
                </td>
              );
            })}
          </tr>

          <tr>
            <td>{dataMenu.payment}</td>
            {arrTraders.map(({ termsPayment, isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  {termsPayment}
                </td>
              );
            })}
          </tr>

          <tr className={styles.table_row__price}>
            <td>{dataMenu.price}</td>
            {arrTraders.map(({ price, isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  {price &&
                    price.map((items) => {
                      return <p key={shortid.generate()}>{items}</p>;
                    })}
                </td>
              );
            })}
          </tr>

          <tr>
            <td>{dataMenu.actions}</td>
            {arrTraders.map(({ isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  -
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default TradeUsers;
