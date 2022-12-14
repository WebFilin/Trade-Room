const express = require("express");

const morgan = require("morgan");

// Mongoose - провайдер для базы данных mongoDB
const mongoose = require("mongoose");

//модель для базы данных
const Bidders = require("./models/bidders");

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
  .connect(db)
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

// Получаем данные из БД и отдаем в UI по get
app.get("/users", (req, res) => {
  Bidders.find().then((result) => res.json(result));
});

app.get("/titles_trade", (req, res) => {
  // Bidders.find().then((result) => res.json(result));
});

// Имитация отсутвия юзеров
app.get("/no_users", (req, res) => {
  res.json([]);
});
