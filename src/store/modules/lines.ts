import { Module } from 'vuex';
import { $http } from '@/service/api';
import { Timetable } from '@/interface/Timetable';

export interface State {
    lines: Array<Timetable>;
    loading: boolean;
    bunchOfLines: Map<number, Map<string, Array<Timetable>>>;
}
const lines: Module<State, unknown> = {
    state: (): State => ({
        lines: [],
        loading: false,
        bunchOfLines: new Map,
    }),
    getters: {
        getLines (state) {
            const uniqueLines = [...new Set(state.lines.map(x => x.line))]
            return uniqueLines.sort();
        },
        getStops: (state) => (line: number) => {
            return state.bunchOfLines.get(line);
        },
         getStopsTime: (state) => (line: number, stop: string) => {
            return state.bunchOfLines.get(line)?.get(stop);
        },
        getStopsNames (state) {
            return [...new Set(state.lines.map((x) => x.stop))];
        },
    },
    mutations: {
        setLines (state, payload: Timetable[]) {
            state.lines = payload;
        },
        setLoading: (state, payload: boolean) => (state.loading = payload),
        setBunchOfLines(state, stops: Timetable[]) {
            for (const stop of stops) {
              if (!state.bunchOfLines.has(stop.line)) {
                state.bunchOfLines.set(stop.line, new Map());
              }
              const lineMap = state.bunchOfLines.get(stop.line);
          
              if (!lineMap?.has(stop.stop)) {
                lineMap?.set(stop.stop, []);
              }
              
              lineMap?.get(stop.stop)?.push(stop);
            }
        },

    },
    actions: {
        async fetchTimetable({ commit }) {
            commit("setLoading", true);
            const response = await $http.get("/stops");
            commit("setLines", response.data);
            commit('setBunchOfLines', response.data);
            commit("setLoading", false);
          },
    }
};

export default lines;