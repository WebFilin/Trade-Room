// Схема - структуры данных для БД
// Импортируем провайдер к БД
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradeShema = new Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Array,
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
module.exports = mongoose.model("bidders", tradeShema);
