import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10 * 1000,
});

instance.interceptors.request.use(config => {
    if (config.method!.toUpperCase() !== 'GET' && !(/(registry)|(login)/g.test(config.url!))) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem("h_token");
    }
    return config;
}, error => {
    console.error("请求错误: ", error);
    return Promise.reject(error);
});

instance.interceptors.response.use(resp => {
    return JSON.parse(resp.data);
}, error => {
    console.error("响应出错: ", error);
    return Promise.reject(error);
})

export default instance;

export interface apiResponse<T = Object> {
    code: number;
    msg: string;
    data?: T;
}