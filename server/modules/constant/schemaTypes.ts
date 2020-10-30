import { Schema } from './interface';

export enum SchemaTypes {
    LOAD_SCHEMA = 'LOAD_SCHEMA',
}

export interface SchemaState {
    readonly schema: Schema;
}

export interface SchemaMutations {
    [key: string]: (schema: SchemaState, data: any) => void;
}

export interface SchemaGetters {
    [key: string]: (schema: SchemaState) => void;
}
