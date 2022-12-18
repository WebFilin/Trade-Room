import React from "react";
import styles from "./tradeRoom.module.scss";
import shortid from "shortid";
import Timer from "../Timer/Timer";
import useInterval from "../useInterval/useInterval";

function TradeRoom({ traders, timeCountdown, dataMenu }) {
  const [arrTraders, setArrTraders] = React.useState([]);

  //   Переход хода
  const [stepBid, setStepBid] = React.useState(1);

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
          {/* Ход */}
          <tr className={styles.table_td_timer}>
            <td>{dataMenu[0]}</td>
            {arrTraders.map(({ isMove }) => {
              return (
                <td key={shortid.generate()}>
                  {isMove ? <Timer timeCountdown={timeCountdown} /> : null}
                </td>
              );
            })}
          </tr>

          {/* Параметры и требования */}
          <tr className={styles.table_row__user_name}>
            <td>{dataMenu[1]}</td>
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

          {/* Комплекс мероприятий */}
          <tr>
            <td>{dataMenu[2]}</td>
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

          {/* Срок изготовления */}
          <tr>
            <td>{dataMenu[3]}</td>
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

          {/* Гарантия */}
          <tr>
            <td>{dataMenu[4]}</td>
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

          {/* Условия оплаты */}
          <tr>
            <td>{dataMenu[5]}</td>
            {arrTraders.map(({ termsPayment, isMove }) => {
              return (
                <td
                  key={shortid.generate()}
                  className={isMove ? null : styles.disabled}
                >
                  {termsPayment}%
                </td>
              );
            })}
          </tr>

          {/* Стоимость изготовления*/}
          <tr className={styles.table_row__price}>
            <td>{dataMenu[6]}</td>
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

          {/* Действия */}
          <tr>
            <td>{dataMenu[7]}</td>
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

export default TradeRoom;
