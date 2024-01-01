import axios from "axios";

type IStringObj = Record<string, string>

export interface apiResponse<T = IStringObj> {
    code: number;
    msg?: string;
    data?: T;
}

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10 * 1000,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use(config => {
    if (config.method!.toUpperCase() !== 'GET' && !(/(registry)|(login)/g.test(config.url!))) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem("h_token");
    }
    return config;
}, error => {
    console.error("请求错误: ", error);
    return Promise.resolve(error);
});

instance.interceptors.response.use(resp => {
    return resp.data;
}, error => {
    console.error("响应出错: ", error);
    return Promise.resolve(error);
})

export default {
    post<D = any, T = IStringObj>(url: string) {
        return (query: string, data: T) => {
            return instance.post<T, apiResponse<D>>(url + query, JSON.stringify(data));
        }
    }
}
