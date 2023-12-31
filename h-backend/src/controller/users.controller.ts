import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import userService from '@src/service/users.service';
import { serviceError, successObj, userIsNotExistsOrPassErr } from '@src/constant/resp.constant';
import env from "@src/config/default.config"

const { create, precisionFind, update, remove, find } = userService;
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
        const { password, id } = req.body;
        precisionFind({ id, password })
            .then(res => {
                if (res && res.dataValues.id == id) {
                    resp.send({ code: 0, msg: "登录成功", token: jwt.sign({ id: res.dataValues.id }, SECRET!, { expiresIn: '3d' }) });
                } else {
                    resp.send(userIsNotExistsOrPassErr);
                }
            })
            .catch(err => {
                console.error(`登录失败：${err}`);
                resp.send(serviceError);
            })
    }
    modify(req: Request, resp: Response) {
        const { id, username, newPassword, password } = req.body;
        precisionFind({ id, password })
            .then(res => {
                if (!res || res.dataValues.id != id) {
                    resp.send(userIsNotExistsOrPassErr);
                    return;
                }
                update({ username, password, id, newPassword })
                    .then(([affectedCount]) => {
                        if (affectedCount == 1) {
                            resp.send({ code: 0, msg: "修改成功" });
                        } else {
                            resp.send(userIsNotExistsOrPassErr);
                        }
                    })
                    .catch(err => {
                        console.error(`修改失败：${err}`);
                        resp.send(serviceError);
                    })
            })
            .catch(err => {
                console.log(`查找失败：${err}`);
                resp.send(serviceError);
            })
    }
    logout(req: Request, resp: Response) {
        const { id, password } = req.body;
        remove({ id, password })
            .then(deleteRows => {
                if (deleteRows == 1) {
                    resp.send({ code: 0, msg: "注销成功" });
                } else {
                    resp.send(userIsNotExistsOrPassErr);
                }
            })
            .catch(err => {
                console.error(`注销失败：${err}`);
                resp.send(serviceError);
            })
    }
    search(req: Request, resp: Response) {
        const { username, page_num, page_size } = req.query;
        find(Number(page_size), Number(page_num), username as string)
            .then(res => {
                const users = res.map(r => r.dataValues);
                resp.send({ code: 0, msg: "查询成功", users: JSON.stringify(users) });
            })
            .catch(err => {
                console.error(`查询失败：${err}`);
                resp.send(serviceError);
            })
    }
}