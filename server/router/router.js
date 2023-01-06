// Выносим пути в отдельный фаил

const Router = require("express");
const endpoints = require("../config/endpoints.js");
const TradersController = require("../TradersController/TradersController.js");
const MenuForRoom = require("../MenuForRoom/MenuForRoom.js");
const TitleRoom = require("../TitleRoom/TitleRoom.js");

const router = new Router();

router.get(endpoints.TRADERS, TradersController.getAllTraders);
router.get(endpoints.LIMIT_TRADERS, TradersController.getSomeTraders);
router.get(endpoints.TRADERS_MENU_ROOM, MenuForRoom);
router.get(endpoints.TRADERS_ROOM_TITLE, TitleRoom);

module.exports = router;
