let _code = 4000;

export const userExists = {
    code: ++_code,
    msg: "用户存在"
};

export const registryFail = {
    code: ++_code,
    msg: "注册失败"
};

export const passwordError = {
    code: ++_code,
    msg: "密码错误"
};

export const loginFail = {
    code: ++_code,
    msg: "登录失败"
};

export const logoutFail = {
    code: ++_code,
    msg: "注销失败"
};

export const searchFail = {
    code: ++_code,
    msg: "查询失败"
};

export const modifyFail = {
    code: ++_code,
    msg: "修改失败"
}