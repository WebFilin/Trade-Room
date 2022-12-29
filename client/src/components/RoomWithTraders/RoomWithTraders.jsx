import React from "react";
import styles from "./roomWithTraders.module.scss";
import useInterval from "../useInterval/useInterval";
import TableRow from "../TableRow/TableRow";
import TableRowTimer from "../TableRowTimer/TableRowTimer";
import TableRowPrice from "../TableRowPrice/TableRowPrice";

function RoomWithTraders({ traders, timeCountdown, dataMenu }) {
  const [arrTraders, setArrTraders] = React.useState([]);

  //   Переход хода
  const [stepBid, setStepBid] = React.useState(1);

  //   Отображаем таймер в первой ячейке при загрузке
  React.useEffect(() => {
    if (traders.length > 0) {
      traders[0].isMove = true;
    }

    setArrTraders(traders);
  }, [traders]);

  // Задаем интервал перехода таймера
  useInterval(() => {
    if (traders.length === 1) {
      setStepBid((setTime) => (setTime = 1));
    } else if (stepBid <= arrTraders.length - 2) {
      setStepBid((setTime) => setTime + 1);
    } else {
      setStepBid((setTime) => (setTime = 0));
    }

    // Включаем блок таймера в заданной stepBid ячейке
    if (arrTraders.length > 0) {
      arrTraders.forEach((items, index) => {
        if (stepBid === index) {
          items.isMove = true;
        } else {
          items.isMove = false;
        }
      });
    }
  }, timeCountdown);

  return (
    <section className={styles.wrapper}>
      <table className={styles.table}>
        <tbody className={styles.table_body}>
          {/* Ход */}
          <TableRowTimer
            arrTraders={arrTraders}
            timeCountdown={timeCountdown}
            rowTitle={dataMenu[0]}
          />

          {/* Параметры и требования */}
          <TableRow
            arrTraders={arrTraders}
            arrMenu={dataMenu}
            rowTitle={dataMenu[1]}
            tdValue={"name"}
            symbol={""}
          />

          {/* Комплекс мероприятий */}
          <TableRow
            arrTraders={arrTraders}
            arrMenu={dataMenu}
            rowTitle={dataMenu[2]}
            tdValue={"qualityStandards"}
            symbol={""}
          />

          {/* Срок изготовления */}
          <TableRow
            arrTraders={arrTraders}
            arrMenu={dataMenu}
            rowTitle={dataMenu[3]}
            tdValue={"productionTime"}
            symbol={""}
          />

          {/* Гарантия */}
          <TableRow
            arrTraders={arrTraders}
            arrMenu={dataMenu}
            rowTitle={dataMenu[4]}
            tdValue={"guarantee"}
            symbol={" мес"}
          />

          {/* Условия оплаты */}
          <TableRow
            arrTraders={arrTraders}
            arrMenu={dataMenu}
            rowTitle={dataMenu[5]}
            tdValue={"termsPayment"}
            symbol={"%"}
          />

          {/* Стоимость изготовления*/}
          <TableRowPrice
            arrTraders={arrTraders}
            rowTitle={dataMenu[6]}
            symbol={""}
          />

          {/* Действия */}
          <TableRow
            arrTraders={arrTraders}
            arrMenu={dataMenu}
            rowTitle={dataMenu[7]}
            tdValue={""}
            symbol={""}
          />
        </tbody>
      </table>
    </section>
  );
}

export default RoomWithTraders;
