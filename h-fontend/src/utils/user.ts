import crypto from 'crypto-js'

export function cryptoPassword(password: string) {
    const hash = crypto.SHA256(password);
    return hash.toString(crypto.enc.Hex);
}

let _token: string | null = null;

export function getToken() {
    if (typeof _token !== 'string') {
        _token = localStorage.getItem("token");
    }
    return _token;
}

export function setToken(token: string) {
    _token = token;
    localStorage.setItem("token", token);
}

let _username: string | null = null;

export function getUsername() {
    if (typeof _username !== 'string') {
        _username = localStorage.getItem("username");
    }
    return _username;
}

export function setUsername(username: string) {
    localStorage.setItem("username", username);
    _username = username;
}