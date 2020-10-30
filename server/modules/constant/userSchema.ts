import { User } from './interface';

export enum UserTypes {
    REQUEST_USER = 'REQUEST_USER',
    REQUEST_USER_COMPLETE = 'REQUEST_USER_COMPLETE',
    USER_FAILURE = 'USER_FAILURE',
}

export interface UserState {
    readonly user: User[];
    readonly data: User;
    readonly loading: boolean;
    readonly loadingButton: boolean;
}

export interface UserMutations {
    [key: string]: (user: UserState, data: any) => void;
}

export interface UserGetters {
    [key: string]: (user: UserState) => void;
}