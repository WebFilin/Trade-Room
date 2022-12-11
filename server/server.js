const express = require("express");
const path = require("path");

const morgan = require("morgan");

// Mongoose - провайдер для базы данных mongoDB
const mongoose = require("mongoose");

//модель для базы данных
const Bidders = require("./models/post");

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

//База данных - доступ
const db =
  "mongodb+srv://WebFilin:Pas321@cluster0.iyjr44f.mongodb.net/nodeBlog?retryWrites=true&w=majority";

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

//   Управление политикой CORS
app.use(cors(corsOptions));

// Логи сервера
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  Bidders.find().then((result) => res.json(result));
});
