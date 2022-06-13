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
  },
  getters: {
    getCart: (state) => state.cart,
    getProducts: (state) => state.products,
    getPlaces: (state) => state.places,
    getCartProducts: (state) =>
      state.products.filter((product) =>
        state.cart.productos.includes(product._id)
      ),
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
  },
  actions: {
    async addToCart({ commit, dispatch, getters }, id) {
      try {
        commit("addToCart", id);
        let product = await dispatch("getProduct", id);
        commit("incrementCartTotal", product.price);
        let cart = await getters.getCart;
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.log(error);
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
  },
  modules: {},
});
