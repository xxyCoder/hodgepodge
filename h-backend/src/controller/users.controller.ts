import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import userService from '@src/service/users.service';
import { serviceError, successObj } from '@src/constant/resp.constant';
import env from "@src/config/default.config"

const { create, precisionFind } = userService;
const { SECRET } = env;

class UserController {
    registry(req: Request, resp: Response) {
        const { username, password, account } = req.body;
        create({ username, password, account, id: null })
            .then(() => {
                resp.send(successObj)
            })
            .catch(err => {
                console.error(`注册失败：${err}`);
                resp.send(serviceError)
            });
    }
    login(req: Request, resp: Response) {
        const { password, account } = req.body;
        precisionFind({ account, password })
            .then(res => {
                if (res && res.dataValues.id) {
                    resp.send({ code: 0, msg: "登录成功", token: jwt.sign({ id: res.dataValues.id }, SECRET!, { expiresIn: '3d' }) });
                } else {
                    resp.send({ code: 400, msg: "没有该用户" });
                }
            })
            .catch(err => {
                console.error(`登录失败：${err}`);
                resp.send(serviceError);
            })
    }
    modify(req: Request, resp: Response) {

    }
}