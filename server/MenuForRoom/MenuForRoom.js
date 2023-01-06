const titlesMenuRoom = require( "../models/titlesMenuRoom.js");

async function getMenu(req, res) {
  try {
    const titlesMenu = await titlesMenuRoom.find();
    return res.json(titlesMenu);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getMenu;
