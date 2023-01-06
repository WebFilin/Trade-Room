// Схема - структуры данных для БД
// Импортируем провайдер к БД
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const titlesMenuRoom = new Schema({
  title: {
    type: String,
    required: true,
  },
});

// Передаем схему в модель
module.exports = mongoose.model("titlesMenuRoom", titlesMenuRoom);
