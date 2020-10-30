import axios, {AxiosResponse} from 'axios';
import { BookGetters, BookMutations, BookState, bookTypes } from '../constant/bookSchema';

const state: BookState = {
    book: [],
    data: {},
    validate: false,
    message: {},
};

const actions = {
    async fetchBook({commit}: any) {
        const response = await axios.get('api/v1/book', {
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
};

const mutations: BookMutations = {
    LOAD_BOOK: (book: BookState | any, data: any) => (book.book = data),
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
