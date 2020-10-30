import axios from 'axios';
import { AuthGetters, AuthMutations, AuthState, AuthTypes } from '../constant/authSchema';

const state: AuthState = {
    auth: [],
    data: {},
    loading: false,
    loadingScreen: false,
};

const actions = {
    async loadIsAuthenticated({commit}: any) {
        const response = await axios.get('api/v1/user/is_authenticated/', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, X-Requested-With, Authorization',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            timeout: 865000,
            responseType: 'json',
            withCredentials: false,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 200 && status < 300,
        });
        return response;
    },
};

const mutations: AuthMutations = {
    LOAD_AUTH: (auth: AuthState | any, data: any) => (auth.data = data),
};

const getters: AuthGetters = {
    is_authenticate: (auth: AuthState) => auth.data,
};

export default {
    state,
    actions,
    mutations,
    getters,
};