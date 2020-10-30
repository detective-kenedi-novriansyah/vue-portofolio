import Vue from 'vue';
import Vuex from 'vuex';
import schemaReducer from './reducer/schemaReducer';
import bookReducer from './reducer/bookReducer';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        schemaReducer,
        bookReducer,
    },
});
