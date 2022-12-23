const express = require("express");

const morgan = require("morgan");

const routes = require("./config/routes")
const config = require("./config/app");

// Mongoose - провайдер для базы данных mongoDB
const mongoose = require("mongoose");

//модель для базы данных
const TradeShema = require("./models/traders");

const TitlesMenuRoom = require("./models/titlesMenuRoom");

// Политика CORS - отключаем
const cors = require("cors");

// Работа с датой
const date = require("date-and-time");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// Сервер
const app = express();

// const PORT = 4000;

mongoose.set("strictQuery", true);

// Подключаемся к БД
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connect to DB");
  })
  .catch((error) => {
    console.log(error);
  });

// Управление CORS
app.use(cors(corsOptions));

// Логи сервера
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.listen(config.PORT, () => {
  console.log(`listening port ${config.PORT}`);
});

// Получаем список участников торгов
app.get(routes.TRADERS, (req, res) => {
  TradeShema.find()
    .then((result) => res.json(result))

    .catch((error) => {
      console.log(error);
    });
});

// Получаем список участников торгов
app.get(routes.LIMIT_TRADERS, (req, res) => {
  const limit = req.query.limit;

  TradeShema.find()
    .then((result) => res.json(result.slice(0, limit)))

    .catch((error) => {
      console.log(error);
    });
});

// Получаем заголовки меню комнаты торгов
app.get(routes.TRADERS_MENU_ROOM, (req, res) => {
  TitlesMenuRoom.find()
    .then((result) => res.json(result))

    .catch((error) => {
      console.log(error);
    });
});

// Заголовок торговой комнаты, дату и текст формируем сразу не сервере.
// Дата и время актуальные
app.get(routes.TRADERS_ROOM_TITLE, (req, res) => {
  const titleTrade = "Тестовые торги на аппарат ЛОТОС №2033564";
  const nowDate = new Date();

  try {
    res.json(`${titleTrade} ${date.format(nowDate, "DD.MM.YYYY HH:mm")}`);
  } catch (error) {
    console.log(error);
  }
});
