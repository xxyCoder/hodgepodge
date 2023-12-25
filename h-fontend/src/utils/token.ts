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