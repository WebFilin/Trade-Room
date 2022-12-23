const server = Object.freeze({
  URL: "http://localhost:4000",
  //   URL: "https://trade-room-server.vercel.app",

  TRADERS: "/traders",

  //   Заголовки лота
  TITLES_MENU_ROOM: "/traders_menu_room",

  // Заголовок команты
  ROOM_TITLE: "/traders_room_title",

  // Количество трейдеров в лоте
  LIMIT_TRADERS_URL: "/limit_traders",
  LIMIT: "?limit="
});

export default server;
