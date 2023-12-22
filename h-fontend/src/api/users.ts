import instance, { type apiResponse } from "./config";

export const userLogin = instance.post<apiResponse<{ token: string }>>;

export const userRegistry = instance.post<apiResponse>;

export const userModInfo = instance.post<apiResponse>;

export const userLogout = instance.post<apiResponse>;