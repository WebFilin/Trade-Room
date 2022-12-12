// Схема - структуры данных для БД
// Импортируем провайдер к БД
const mongoose = require("mongoose");

// Получаем конструктр схем
const Schema = mongoose.Schema;

// Описываем схему сушьности постов
const biddersShema = new Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  guarantee: {
    type: String,
    required: true,
  },

  termsPayment: {
    type: String,
    required: true,
  },

  productionTime: {
    type: String,
    required: true,
  },
  isMove: {
    type: Boolean,
    required: true,
  },
});

// Передаем схему в модель
const Bidders = mongoose.model("Bidders", biddersShema);

// Экспортируем модель
module.exports = Bidders;
