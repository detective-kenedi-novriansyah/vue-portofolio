import { Book } from './interface';

export enum bookTypes {
    LOAD_BOOK = 'LOAD_BOOK',
    RECORD_BOOK = 'RECORD_BOOK',
    BOOK_FAILURE = 'BOOK_FAILURE',
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
