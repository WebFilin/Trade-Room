const server = Object.freeze({
  //   URL: "http://localhost:4000",
  URL: "https://trade-room-mt2w-hu9h8r5pm-webfilin.vercel.app",

  TRADERS: "/api/traders",

  //   Заголовки лота
  TITLES_MENU_ROOM: "/api/traders_menu_room",

  // Заголовок команты
  ROOM_TITLE: "/api/traders_room_title",

  // Количество трейдеров в лоте
  LIMIT_TRADERS_URL: "/api/limit_traders",
  QUERY_LIMIT: "?limit=",
});

export default server;
