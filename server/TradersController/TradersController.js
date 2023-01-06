const TradeShema = require("../models/traders.js");

class TradersController {
  // Получаем всех трейдеров
  async getAllTraders(req, res) {
    try {
      const allTraders = await TradeShema.find();
      return res.json(allTraders);
    } catch (error) {
      console.log(error);
    }
  }

  //   Получаем несколько трейдеров по установленному лимиту
  async getSomeTraders(req, res) {
    try {
      const limit = req.query.limit;

      const allTraders = await TradeShema.find();

      return res.json(allTraders.slice(0, limit));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TradersController();
