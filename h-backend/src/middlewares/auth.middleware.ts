import { HttpStatus } from "@nestjs/common";
import { invalidToken, noToken, tokenExpiredError } from "src/constant/auth.constant";
import jwt from 'jsonwebtoken'
import type { NextFunction, Request, Response } from "express";

const secret = 'hodgepodge';

export function auth(req: Request, resp: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
        resp.status(HttpStatus.OK).send(noToken);
        return;
    }
    const token = authorization.replace('Bearer ', '');
    try {
        jwt.verify(token, secret);
        next();
    } catch (err) {
        console.error(`token验证出错: ${err}`);
        switch (err.name) {
            case 'TokenExpiredError':
                console.error('token过期')
                resp.status(HttpStatus.OK).send(tokenExpiredError)
                break
            case 'JsonWebTokenError':
                console.error('无效token')
                resp.status(HttpStatus.OK).send(invalidToken)
                break
        }
    }
}