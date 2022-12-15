import React from "react";
import styles from "./tradeRoom.module.scss";
import shortid from "shortid";
import Timer from "../Timer/Timer";
// import useInterval from "../useInterval/useInterval";

function TradeUsers({ users, timeLimitMin }) {
  const [arrUsers, setArrUsers] = React.useState([]);
  const [stepBid, setStepBid] = React.useState(0);

  // Моковые данные - получать от сервера
  const dataMenu = [
    { id: 1, title: "Ход" },
    { id: 2, title: "Параметры и требования" },
    {
      id: 3,
      title:
        "Наличие комплекса мероприятий, повыщающих стандарты качества изготовления",
    },
    { id: 4, title: "Срок изготовления лота, дней" },
    { id: 5, title: "Гарантийные обязательства" },
    { id: 6, title: "Условия оплаты" },
    { id: 7, title: "Стоимость изготовления лота руб (без НДС)" },
    { id: 8, title: "Действия" },
  ];

  //Перемещаем таймер по ячейкам, очищаем ячейки
  React.useEffect(() => {
    console.log(stepBid);
    if (users.length > 0) {
      users.forEach((items, index) => {
        if (stepBid === index) {
          items.isMove = true;
        } else {
          items.isMove = false;
        }
      });
    }

    setArrUsers(users);
  }, [stepBid, users]);

  return (
    <section className={styles.wrapper}>
      <table className={styles.table}>
        <tbody className={styles.table_body}>
          <tr className={styles.table_td_timer}>
            <td>{dataMenu[0].title}</td>
            {arrUsers.map(({ isMove }) => {
              return (
                <td key={shortid.generate()}>
                  {isMove ? <Timer timeLimitMin={timeLimitMin} /> : null}
                </td>
              );
            })}
          </tr>

          <tr className={styles.table_row__user_name}>
            <td>{dataMenu[1].title}</td>
            {arrUsers.map(({ name, isMove }) => {
              return <td key={shortid.generate()}> {name}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[2].title}</td>
            {arrUsers.map(({ qualityStandards, isMove }) => {
              return <td key={shortid.generate()}> {qualityStandards}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[3].title}</td>
            {arrUsers.map(({ productionTime, isMove }) => {
              return <td key={shortid.generate()}> {productionTime}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[4].title}</td>
            {arrUsers.map(({ guarantee, isMove }) => {
              return <td key={shortid.generate()}> {guarantee}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[5].title}</td>
            {arrUsers.map(({ termsPayment, isMove }) => {
              return <td key={shortid.generate()}> {termsPayment}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[6].title}</td>
            {arrUsers.map(({ price, isMove }) => {
              return <td key={shortid.generate()}> {price}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[7].title}</td>
            {/* {arrUsers.map(() => {
              return <td key={shortid.generate()}></td>;
            })} */}
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default TradeUsers;
