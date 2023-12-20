export interface IUsers {
    id: number;
    username?: string;
    account?: string;
    password?: string;
}

export interface userLoginParams {
    username?: string;
    account: string;
    password: string;
}

export interface userModParams {
    username?: string;
    password?: string;
}

export interface userOutParams {
    account: string;
    password: string;
}