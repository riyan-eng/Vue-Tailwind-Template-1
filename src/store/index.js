import { createStore } from "vuex";
import SecureLS from "secure-ls";
import createPersistedState from "vuex-persistedstate";

const ls = new SecureLS({ isCompression: false });

export default createStore({
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],

  state: {
    user: {
      isLogin: false,
      data: null,
      accessToken: null,
      refreshToken: null
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGIN(state, data) {
      state.user.isLogin = data;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_ACCESS_TOKEN(state, data) {
      state.user.accessToken = data;
    },
    SET_REFRESH_TOKEN(state, data) {
      state.user.refreshToken = data;
    },
  },
  actions: {
    async signIn(context, payload) {
      context.commit("SET_LOGIN", true);
      context.commit("SET_USER", payload);
      context.commit("SET_ACCESS_TOKEN", payload.accessToken);
      context.commit("SET_REFRESH_TOKEN", payload.refreshToken);
    },
    async signOut(context) {
      context.commit("SET_LOGIN", false);
      context.commit("SET_USER", null);
      context.commit("SET_ACCESS_TOKEN", null);
      context.commit("SET_REFRESH_TOKEN", null);
    },
    async updateAccessToken(context, payload) {
      context.commit("SET_ACCESS_TOKEN", payload.accessToken);
    },
  },
});
