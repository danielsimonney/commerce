import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      {
        name: "bureau",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT-ulUb_D0_78Y3QWUsFtsiXVkX7lfSlVi3A&usqp=CAU",
        seller: "Bapt Gims",
        price: "550",
        id: 1
      },
      {
        name: "tronconneuse",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIF-3wdMsUyFo9dZVV_BJziEZ2I6gjBZ8Zxg&usqp=CAU",
        seller: "lily srt",
        price: "300",
        id: 2
      },
      {
        name: "Manteau",
        img:
          "https://www.apc.fr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/apc/imedia/WOAJS-F01295_CAC_00.jpg",
        seller: "sam Doe",
        price: "35",
        id: 3
      },
      {
        name: "baskets",
        img:
          "https://cdn.laredoute.com/products/641by641/1/f/f/1ff32f1d3d7abb8b59dedf98328fb998.jpg",
        seller: "John Doe",
        price: "75",
        id: 4
      },
      {
        name: "macbook pro",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiac-fzFzT1NW3DGHwYz70NIEsX6IbaHUeDQ&usqp=CAU",
        seller: "Wilima Doe",
        price: "1275",
        id: 5
      }
    ],
    cart: []
  },
  mutations: {
    ADD_PRODUCT(state, article) {
      let double = false;
      state.cart.forEach((product, index) => {
        if (product.id === article.id) {
          state.cart[index] = {
            ...state.cart[index],
            quantity: article.quantity + product.quantity
          };
          double = true;
        }
      }, state.cart);
      if (double === false) {
        state.cart.push(article);
      }
    },
    SUPRESS_PRODUCT(state, id) {
      console.log(id);
      let i = undefined;
      state.cart.forEach((product, index) => {
        if (product.id === id) {
          i = index;
        }
      }, state.cart);
      state.cart.splice(i, 1);
    },
    CHANGE_QUANTITY(state, obj) {
      let id = obj.obj.id;
      let qt = obj.obj.quantity;
      state.cart.forEach((product, index) => {
        if (product.id === id) {
          state.cart[index] = {
            ...state.cart[index],
            quantity: qt
          };
        }
      }, state.cart);
    }
  },
  actions: {
    addProduct({ commit }, article) {
      commit("ADD_PRODUCT", article.article);
    },
    supressProduct({ commit }, id) {
      commit("SUPRESS_PRODUCT", id);
    },
    changeQuantity({ commit }, obj) {
      commit("CHANGE_QUANTITY", obj);
    }
  },
  getters: {
    cart: state => state.cart,
    products: state => state.products,
    one_product: state => id =>
      state.products.filter(product => product.id == id)[0] || undefined
  }
});

export default store;
