import React from "react";
import variables from "../../constants/constants";
import NoTraders from "../NoTraders/NoTraders";
import RoomWithTraders from "../RoomWithTraders/RoomWithTraders";

function TradersRoom({ traders, dataMenu }) {
  //  Отсчет таймера, минуты
  //   const timeCountdown = variables.TIME_LIMIT_MIN * 60 * 1000;
  const timeCountdown = 3000;
  return (
    <>
      {traders.length > 0 ? (
        <RoomWithTraders
          traders={traders}
          timeCountdown={timeCountdown}
          dataMenu={dataMenu}
        />
      ) : (
        <NoTraders timeCountdown={timeCountdown} dataMenu={dataMenu} />
      )}
    </>
  );
}

export default TradersRoom;
