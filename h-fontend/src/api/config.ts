import axios from "axios";

export interface apiResponse<T = Record<string, string>> {
    code: number;
    msg: string;
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
    return JSON.parse(resp.data);
}, error => {
    console.error("响应出错: ", error);
    return Promise.resolve(error);
})

export default {
    post<T = Record<string, string>>(url: string) {
        return (query: string, data: any) => {
            return instance.post<T, apiResponse<T>>(url + query, JSON.stringify(data));
        }
    }
}
