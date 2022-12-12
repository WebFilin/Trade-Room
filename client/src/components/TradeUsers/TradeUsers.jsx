import React from "react";
import styles from "./tradeUsers.module.scss";
import Timer from "../Timer/Timer";

function TradeUsers({ users, timeLimitMin }) {
  const [arrUsers, setArrUsers] = React.useState([]);
  const [isMove, setIsMove] = React.useState(true);

  const time = timeLimitMin * 60 * 1000;

  React.useEffect(() => {
    setArrUsers(users);
  }, [users]);

  //   Задаем время хода у пользователя
  //   setInterval(() => {
  //     setIsMove(!isMove);
  //   }, 2 * 1000);

  return (
    <article className={styles.wrapper}>
      <section className={styles.body}>
        {arrUsers.map(({ _id, name }) => {
          return (
            <div key={_id} className={styles.items_trade}>
              <Timer timeLimitMin={timeLimitMin} />
              <div className={styles.items__trade_name}> {name}</div>
            </div>
          );
        })}
      </section>
    </article>
  );
}

export default TradeUsers;
