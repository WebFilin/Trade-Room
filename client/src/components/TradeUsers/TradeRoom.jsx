import React from "react";
import styles from "./tradeRoom.module.scss";
import Timer from "../Timer/Timer";

function TradeUsers({ users, timeLimitMin }) {
  const [arrUsers, setArrUsers] = React.useState([]);
  const [tableColumns, setTableColumns] = React.useState([]);

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

  React.useEffect(() => {
    setArrUsers(users);
  }, [users]);

  console.log(users);

  return (
    <section className={styles.wrapper}>
      <table className={styles.table}>
        <tbody className={styles.table_body}>
          {/*  */}
          <tr className={styles.table_td_timer}>
            {dataMenu[0].title}
            {arrUsers.map(() => {
              return (
                <td>
                  <Timer timeLimitMin={timeLimitMin} />
                </td>
              );
            })}
          </tr>

          <tr className={styles.table_row__user_name}>
            <td>{dataMenu[1].title}</td>
            {arrUsers.map(({ name }) => {
              return <td> {name}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[2].title}</td>
            {arrUsers.map(({ qualityStandards }) => {
              return <td> {qualityStandards}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[3].title}</td>
            {arrUsers.map(({ productionTime }) => {
              return <td> {productionTime}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[4].title}</td>
            {arrUsers.map(({ guarantee }) => {
              return <td> {guarantee}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[5].title}</td>
            {arrUsers.map(({ termsPayment }) => {
              return <td> {termsPayment}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[6].title}</td>
            {arrUsers.map(({ price }) => {
              return <td> {price}</td>;
            })}
          </tr>

          <tr>
            <td>{dataMenu[7].title}</td>
            {arrUsers.map(({}) => {
              return <td></td>;
            })}
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default TradeUsers;
