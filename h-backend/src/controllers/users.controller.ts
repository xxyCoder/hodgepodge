import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Res } from "@nestjs/common";
import jwt from "jsonwebtoken"
import { userLoginParams, userModParams, userOutParams } from "src/interfaces/users.interface";
import { UsersService } from "src/services/users.service";
import { Response } from "express";
import { loginFail, logoutFail, modifyFail, passwordError, registryFail, searchFail, userExists } from "src/constant/users.constant";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post("registry")
    async registry(@Body() body: userLoginParams, @Res() resp: Response) {
        try {
            const res = await this.usersService.find({ account: body.account });
            if (res.length > 0) {
                resp.status(HttpStatus.OK).send(userExists);
                return;
            }
            await this.usersService.create({ id: null, ...body })
            resp.status(HttpStatus.OK).send({ code: 0, msg: "注册成功" });
        } catch (err) {
            console.error(`${body.username}注册失败：${err}`);
            resp.status(HttpStatus.OK).send(registryFail);
        }
    }
    @Post("login")
    login(@Body() body: userLoginParams, @Res() resp: Response) {
        this.usersService.find({ account: body.account, password: body.password })
            .then(res => {
                if (res.length === 0) {
                    resp.send(HttpStatus.OK).send(passwordError);
                    return;
                }
                const token = jwt.sign({ id: res[0].id, username: res[0].username }, "hodgepodge", { expiresIn: '3d' });
                resp.status(HttpStatus.OK).send({ code: 0, msg: "登录成功", token })
            })
            .catch(err => {
                console.error(`${body.username}登录失败：${err}`);
                resp.status(HttpStatus.OK).send(loginFail);
            })
    }
    @Delete()
    logout(@Query("id") id: number, @Body() body: userOutParams, @Res() resp: Response) {
        this.usersService.delete(id, body)
            .then(() => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "注销成功" });
            })
            .catch(err => {
                console.error(`用户注销失败：${err}`);
                resp.status(HttpStatus.OK).send(logoutFail);
            })
    }
    @Get()
    findPage(@Query("page_num") page_num: number, @Query("page_size") page_size: number, @Body() username: string, @Res() resp: Response) {
        this.usersService.pageFind(page_num, page_size, username)
            .then(res => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "查询成功", res });
            })
            .catch(err => {
                console.error(`用户查询失败：${err}`);
                resp.status(HttpStatus.OK).send(searchFail);
            })
    }
    @Put()
    update(@Query("id") id, @Body() body: userModParams, @Res() resp: Response) {
        const config: Record<string, string> = {};
        const { password, username } = body;
        password && Object.assign(config, { password })
        username && Object.assign(config, { username })
        this.usersService.modify(id, config)
            .then(() => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "修改成功" });
            })
            .catch(err => {
                console.error(`${id}信息修改失败：${err}`);
                resp.status(HttpStatus.OK).send(modifyFail);
            })
    }
}