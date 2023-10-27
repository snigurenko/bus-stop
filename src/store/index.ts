import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import stops from "./modules/stops";
import lines from "./modules/lines";

const plugins = [
  createPersistedState({
    paths: ["timetable"],
  }),
];

export default createStore({
  plugins,
  modules: {
    lines,
    stops,
  },
  devtools: true,
})
 