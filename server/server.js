const express = require("express");

const morgan = require("morgan");

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

const PORT = 4000;

//База данных
const MONGODB_URI =
  "mongodb+srv://Lotus:Pass321@cluster0.iyjr44f.mongodb.net/TradeRoom?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

// Подключаемся к БД
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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

app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});

// Получаем список участников торгов
app.get("/traders", (req, res) => {
  TradeShema.find()
    .then((result) => res.json(result))

    .catch((error) => {
      console.log(error);
    });
});

// Получаем список участников торгов
app.get("/limit_traders", (req, res) => {
  const limit = req.query.limit;

  TradeShema.find()
    .then((result) => res.json(result.slice(0, limit)))

    .catch((error) => {
      console.log(error);
    });
});

// Получаем заголовки меню комнаты торгов
app.get("/traders_menu_room", (req, res) => {
  TitlesMenuRoom.find()
    .then((result) => res.json(result))

    .catch((error) => {
      console.log(error);
    });
});

// Заголовок торговой комнаты, дату и текст формируем сразу не сервере.
// Дата и время актуальные
app.get("/traders_room_title", (req, res) => {
  const titleTrade = "Тестовые торги на аппарат ЛОТОС №2033564";
  const nowDate = new Date();

  try {
    res.json(`${titleTrade} ${date.format(nowDate, "DD.MM.YYYY HH:mm")}`);
  } catch (error) {
    console.log(error);
  }
});
