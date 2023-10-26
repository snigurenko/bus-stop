import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import stopsList from "./modules/stopsList";
import busLines from "./modules/busLines";

const plugins = [
  createPersistedState({
    paths: ["timetable"],
  }),
];

export default createStore({
  plugins,
  modules: {
    stopsList,
    busLines,
  },
  devtools: true,
})
 