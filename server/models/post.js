// Схема - структуры данных для БД
// Импортируем провайдер к БД
const mongoose = require("mongoose");

// Получаем конструктр схем
const Schema = mongoose.Schema;

// Описываем схему сушьности постов
const postShema = new Schema({
  text: {
    type: String,
    // Поле является обязательным
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// Передаем схему в модель
const Post = mongoose.model("Post", postShema);

// Экспортируем модель
module.exports = Post;
