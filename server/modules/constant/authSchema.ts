import { Auth } from './interface';

export enum AuthTypes {
    LOAD_AUTH = 'LOAD_AUTH',
}

export interface AuthState {
    readonly auth: Auth[];
    readonly data: Auth;
    readonly loading: boolean;
    readonly loadingScreen: boolean;
}

export interface AuthMutations {
    [key: string]: (auth: AuthState, data: any) => void;
}

export interface AuthGetters {
    [key: string]: (auth: AuthState) => void;
}