import axios, {AxiosResponse} from 'axios';
import { BookGetters, BookMutations, BookState, bookTypes } from '../constant/bookSchema';

const state: BookState = {
    book: [],
    data: {},
    validate: false,
};

const actions = {
    async fetchBook({commit}: any) {
        const response = await axios.get('api/v1/book/', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, X-Requested-With',
                'Access-Control-Allow-Origin': '*',
            },
            timeout: 865000,
            responseType: 'json',
            withCredentials: false,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 200 && status < 300,
        }).then((res: AxiosResponse<any>) => {
            commit(bookTypes.LOAD_BOOK, res.data);
        });
        return response;
    },
    async recordBook({commit}: any, data: FormData) {
        const response = await axios.post('api/v1/book/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, X-Requested-With',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            timeout: 865000,
            responseType: 'json',
            withCredentials: false,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 201 && status < 300,
        });
        return response;
    },
};

const mutations: BookMutations = {
    LOAD_BOOK: (book: BookState | any, data: any) => (book.book = data),
    RECORD_BOOK: (book: BookState, data: any) => (book.book.unshift(data)),
};

const getters: BookGetters = {
    allBook: (book: BookState) => book.book,
};

export default {
    state,
    actions,
    mutations,
    getters,
};
