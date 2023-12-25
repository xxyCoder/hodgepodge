import instance from "./config";

export const userLogin = instance.post("/users/login");

export const userRegistry = instance.post("/users/registry");

export const userModInfo = instance.post;

export const userLogout = instance.post;