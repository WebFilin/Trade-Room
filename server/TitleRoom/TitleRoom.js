// Работа с датой
const date = require("date-and-time");

async function TitleRoom(req, res) {
  const titleTrade = "Тестовые торги на аппарат ЛОТОС №2033564";
  const nowDate = new Date();

  try {
    return res.json(
      `${titleTrade} ${date.format(nowDate, "DD.MM.YYYY HH:mm")}`
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = TitleRoom;
