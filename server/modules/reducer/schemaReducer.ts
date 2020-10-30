import axios, {AxiosResponse} from 'axios';
import { SchemaGetters, SchemaMutations, SchemaState, SchemaTypes } from '../constant/schemaTypes';

const state: SchemaState = {
    schema: {},
};

const actions = {
    async fetchSchema({commit}: any) {
        const response = await axios.get('api/v1/schema/', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, X-Requeseted-With',
            },
            timeout: 865000,
            responseType: 'json',
            withCredentials: false,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 200 && status < 300,
        }).then((res: AxiosResponse<any>) => {
            commit(SchemaTypes.LOAD_SCHEMA, res.data);
        });
        return response;
    },
};

const mutations: SchemaMutations = {
    LOAD_SCHEMA: (schema: SchemaState | any, data: any) => (schema.schema = data),
};

const getters: SchemaGetters = {
    allSchema: (schema: SchemaState) => schema.schema,
};

export default {
    state,
    actions,
    mutations,
    getters,
};
