let _code = 2000;

export const noToken = {
    code: ++_code,
    msg: "没有携带token"    
}

export const tokenExpiredError = {
    code: ++_code,
    msg: "token过期了"
}

export const invalidToken = {
    code: ++_code,
    msg: "token无效"
}