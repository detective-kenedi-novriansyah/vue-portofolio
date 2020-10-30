import axios, {AxiosResponse} from 'axios';
import { User } from '../constant/interface';
import { UserGetters, UserMutations, UserState, UserTypes } from '../constant/userSchema';

type UserLoginState = Pick<User, 'username' | 'password'>;

const state: UserState = {
    user: [],
    data: {},
    loading: false,
    loadingButton: false,
};

const actions = {
    async requestUser({commit}: any, data: UserLoginState) {
        const response = await axios.post('api-token-auth/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-headers': 'Content-Type, Origin, Accept, X-Requested-With',
            },
            timeout: 865000,
            responseType: 'json',
            withCredentials: false,
            maxRedirects: 5,
            maxContentLength: 2000,
            validateStatus: (status: number) => status >= 200 && status < 300,
        });
        return response;
    },
};

const mutations: UserMutations = {
    REQUEST_USER_COMPLETE: (user: UserState | any, data: boolean) => (user.loadingButton = data),
};

const getters: UserGetters = {
    loadingButtonUser: (user: UserState) => user.loadingButton,
    loadingUser: (user: UserState) => user.loading,
};

export default {
    state,
    actions,
    mutations,
    getters,
};