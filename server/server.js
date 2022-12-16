const express = require("express");

const morgan = require("morgan");

// Mongoose - провайдер для базы данных mongoDB
const mongoose = require("mongoose");

//модель для базы данных
const TradeShema = require("./models/traders");

const TitlesMenuRoom = require("./models/titlesMenuRoom");

// Политика CORS - отключаем
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// Сервер
const app = express();

const PORT = 4000;

//База данных
const db =
  "mongodb+srv://Lotus:Pass321@cluster0.iyjr44f.mongodb.net/TradeRoom?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

// Подключаемся к БД
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
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

// Получаем заголовки меню комнаты торгов
app.get("/traders_menu_room", (req, res) => {
  TitlesMenuRoom.find()
    .then((result) => res.json(result))

    .catch((error) => {
      console.log(error);
    });
});

// Заголовок торговой комнаты - формирую на сервере для UI
app.get("/traders_room_title", (req, res) => {
  const titleTrade = "Тестовые торги на аппарат ЛОТОС №2033564";
  const dataTrade = "09.11.2020";
  const timeTrade = "07:00";

  res.json(`${titleTrade} ${dataTrade} ${timeTrade}`);
});
