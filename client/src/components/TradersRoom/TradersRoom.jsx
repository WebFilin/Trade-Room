import React from "react";
import variables from "../../variables/variables";
import NoTraders from "../NoTraders/NoTraders";
import RoomWithTraders from "../RoomWithTraders/RoomWithTraders";

function Loader({ traders, dataMenu }) {
  //  Отсчет таймера, минуты
  const timeCountdown = variables.TIME_LIMIT_MIN * 60 * 1000;

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

export default Loader;
