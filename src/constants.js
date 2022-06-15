export const BASE_URL = "https://bazar-online-back.herokuapp.com/api/";
export const ENDPOINTS = {
  PRODUCTS: {
    BASE: "productos/",
    ALL: "productos/todos/",
    DEACTIVATE: "productos/des/",
    ACTIVATE: "productos/act/",
    IMAGE: "productos/src/",
    TITLE: "productos/ttl/",
    SIZE: "productos/sz/",
    PRICE: "productos/prc/",
  },
  PLACES: {
    BASE: "lugares/",
  },
  ORDERS: {
    BASE: "ordenes/",
    ACTIVES: "ordenes/act/",
  },
  CLIENTS: {
    BASE: "clientes/", // Enviar email y telefono en body
    LOGIN: "vtoken/login/", // Enviar token del correo en body
    VERIFY: "vtoken/posts/", // Enviar token de sesion en Authorization Bearer
  },
};
