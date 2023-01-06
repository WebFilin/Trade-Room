const express = require("express");
const morgan = require("morgan");

const config = require("./config/app.js");

// Mongoose - провайдер для базы данных mongoDB
const mongoose = require("mongoose");

// Политика CORS - отключаем
const cors = require("cors");

// подключаем роуты
const router = require("./router/router.js");

// Сервер
const app = express();

const PORT = config.PORT;

// Управление CORS
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Логи сервера
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/api", router);

// Запускаем сервер
async function startServer() {
  try {
    //  Прослушиваем порт
    app.listen(PORT, () => {
      console.log(`listening port ${PORT}`);
    });

    // Подключаемся к БД
    mongoose.set("strictQuery", true);
    mongoose.connect(config.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connect to DB");
  } catch (error) {
    console.log(error);
  }
}
startServer();
