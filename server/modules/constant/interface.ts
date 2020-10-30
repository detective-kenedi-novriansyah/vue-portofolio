export interface User {
    id?: number;
    username?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    confirm_password?: string;
    token?: string;
}

export interface Auth {
    user?: User;
    avatar?: string;
    country?: string;
    city?: string;
    address?: string;
    create_at?: string;
    update_at?: string;
}

export interface Course {
    name?: string;
    link?: string;
    description?: string;
}

export interface Book {
    name?: string;
    image?: string;
    description?: string;
    course?: Course;
}

export interface Button {
    titleLogin?: string;
    login?: string;
    signin?: string;
    register?: string;
    join?: string;
    title_register?: string;
    child_title_register?: string;
    createNewAccount?: string;
    regex_password?: string;
    forgot?: string;
    forgot_password?: string;
    title_forgot?: string;
    child_forgot_forgot?: string;
    ready_exists?: string;
    course?: string;
    upload_book?: string;
    upload_course?: string;
    settings?: string;
    logout?: string;
    submit?: string;
}

export interface Schema {
    auth?: Auth;
    book?: Book;
    button?: Button;
    country_list?: [{
        name?: string;
    }];
    validate?: {
        username?: string;
        email?: string;
        password?: string;
        confirm_password?: string;
        token?: string;
    };
    my?: {
        hai?: string;
        username?: string;
        job?: string;
        avatar?: string;
        contact?: string;
        email?: string;
        contact_phone_wa?: string;
        about?: string;
        about_me?: string;
        experince?: string;
        skill?: string;
        thanks?: string;
        validate_success?: string;
        savePhone?: string;
        saveEmail?: string;
        subscribe?: string;
        manipulations?: string;
        email_address?: string;
        cancel?: string;
    };
}