import { Module } from 'vuex';
import { $http } from '@/service/api';
import { Timetable } from '@/interface/Timetable';

export interface State {
    lines: Array<Timetable>;
    loading: boolean;
}
const busLines: Module<State, unknown> = {
    state: (): State => ({
        lines: [],
        loading: false,
    }),
    getters: {
        lines (state) {
            const uniqueLines = [...new Set(state.lines.map(x => x.line))]
            return uniqueLines.sort();
        },
    },
    mutations: {
        setLines (state, payload: Timetable[]) {
            state.lines = payload;
        },
        setLoading: (state, payload: boolean) => (state.loading = payload),


    },
    actions: {
        async fetchLines({ commit }) {
            commit("setLoading", true);
            const response = await $http.get("/stops");
            commit("setLines", response.data);
            commit("setLoading", false);
          },
    }
};

export default busLines;