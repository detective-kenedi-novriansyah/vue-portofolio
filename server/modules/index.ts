import Vue from 'vue';
import Vuex from 'vuex';
import schemaReducer from './reducer/schemaReducer';
import bookReducer from './reducer/bookReducer';
import userReducer from './reducer/userReducer';
import authReducer from './reducer/authReducer';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        schemaReducer,
        bookReducer,
        userReducer,
        authReducer,
    },
});
