import { HttpStatus } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs"

export function VerifyRegistryParamsNotNull(req: Request, resp: Response, next: NextFunction) {
    const { username, account, password } = req.body;
    if (!username || !account || !password) {
        resp.status(HttpStatus.OK).send({ code: 1011, msg: "参数不能为空" });
        return;
    }
    next()
}

export function verifyLoginAndLogoutParamsNotNull(req: Request, resp: Response, next: NextFunction) {
    const { account, password } = req.body;
    if (!account || !password) {
        resp.status(HttpStatus.OK).send({ code: 1011, msg: "参数不能为空" });
        return;
    }
    next();
}

export function verifyModifyInfoParamsNotNull(req: Request, resp: Response, next: NextFunction) {
    const { account, password } = req.body;
    if (!account && !password) {
        resp.status(HttpStatus.OK).send({ code: 1012, msg: "参数至少有一个不能为空" });
        return;
    }
    next();
}

export function EncryptPassword(req: Request, resp: Response, next: NextFunction) {
    const { password } = req.body;
    if (password) {
        const salt = bcrypt.genSaltSync(16);
        const hash = bcrypt.hashSync(password, salt);
        req.body.password = hash;
    }
    next();
}