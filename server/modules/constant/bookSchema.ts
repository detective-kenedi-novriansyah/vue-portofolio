import { Book } from './interface';

export enum bookTypes {
    LOAD_BOOK = 'LOAD_BOOK',
}

export interface BookState {
    readonly book: Book[];
    readonly data: Book;
    readonly validate: boolean;
}

export interface BookMutations {
    [key: string]: (book: BookState | any, data: any) => void;
}

export interface BookGetters {
    [key: string]: (book: BookState) => void;
}
