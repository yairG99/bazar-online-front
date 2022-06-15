import Vue from "vue";
import Vuex from "vuex";
import { BASE_URL, ENDPOINTS } from "../constants";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: JSON.parse(
      localStorage.getItem("cart") ||
        `{
        "productos": [],
        "valPedido": 0,
        "envPlat": 10,
        "activo": true
      }`
    ),
    products: [],
    places: [],
    cliente_id: null,
    auth: false,
    bandera: false,
    invalidItem: false,
    correo: null,
    telefono: null,
  },
  getters: {
    getCart: (state) => state.cart,
    getProducts: (state) => state.products,
    getPlaces: (state) => state.places,
    getCartProducts: (state) =>
      state.products.filter((product) =>
        state.cart.productos.includes(product._id)
      ),
    getValidState: (state) => state.invalidItem,
    getClienteId: (state) => state.cliente_id,
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.productos.push(payload);
    },
    deleteFromCart(state, payload) {
      state.cart.productos = state.cart.productos.filter(
        (product) => product != payload
      );
    },
    incrementCartTotal(state, payload) {
      state.cart.valPedido += payload;
    },
    decrementCartTotal(state, payload) {
      state.cart.valPedido -= payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setPlaces(state, payload) {
      state.places = payload;
    },
    toggleValidity(state) {
      state.invalidItem = !state.invalidItem;
    },
    setCorreo(state, payload) {
      state.correo = payload;
    },
    setTel(state, payload) {
      state.telefono = payload;
    },
    set_idCliente(state, cliente_id) {
      state.cliente_id = cliente_id;
    },
    set_Auth(state, auth) {
      state.auth = auth;
    },
    set_Bandera(state, auth) {
      state.bandera = auth;
    },
  },
  actions: {
    async addToCart({ commit, dispatch, state }, id) {
      if (!state.cart.productos.includes(id)) {
        try {
          commit("addToCart", id);
          let product = await dispatch("getProduct", id);
          commit("incrementCartTotal", product.price);
          localStorage.setItem("cart", JSON.stringify(state.cart));
        } catch (error) {
          console.log(error);
        }
      } else {
        commit("toggleValidity");
      }
    },
    async deleteFromCart({ commit, dispatch, getters }, id) {
      try {
        commit("deleteFromCart", id);
        let product = await dispatch("getProduct", id);
        commit("decrementCartTotal", product.price);
        let cart = await getters.getCart;
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.log(error);
      }
    },
    getProduct({ state }, id) {
      return state.products.filter((product) => product._id === id)[0];
    },
    async getProducts({ commit }) {
      const url = BASE_URL + ENDPOINTS.PRODUCTS.BASE;
      try {
        const products = (await axios.get(url)).data;
        commit("setProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
    async getPlaces({ commit }) {
      const url = BASE_URL + ENDPOINTS.PLACES.BASE;
      try {
        const places = (await axios.get(url)).data;
        commit("setPlaces", places);
      } catch (error) {
        console.log(error);
      }
    },
    async set_idCliente({ commit }, cliente_id) {
      commit("set_idCliente", cliente_id);
    },
    async set_Auth({ commit }, auth) {
      commit("set_Auth", auth);
    },
    async set_Bandera({ commit }, auth) {
      commit("set_Bandera", auth);
    },
    CerrarSesion({ commit }) {
      commit("setPlaces", null);
      commit("setCorreo", null);
      commit("setTel", null);
      commit("setProducts", null);
      localStorage.removeItem("products");
      localStorage.removeItem("cart");
      localStorage.removeItem("correo");
      localStorage.removeItem("telefono");
      localStorage.removeItem("place");
      window.location.replace("/");
    },
  },
  modules: {},
});
