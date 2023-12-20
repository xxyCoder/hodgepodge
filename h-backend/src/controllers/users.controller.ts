import { Body, Controller, Delete, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { userLoginParams } from "src/interfaces/users.interface";
import { UsersService } from "src/services/users.service";
import { Response, response } from "express";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post("registry")
    registry(@Body() body: userLoginParams, @Res() resp: Response) {
        this.usersService.create({ id: null, ...body })
            .then(() => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "注册成功" })
            })
            .catch(err => {
                console.error(`${body.username}注册失败：${err}`);
                resp.status(HttpStatus.OK).send({ code: 2001, msg: "注册失败" })
            })
    }
    @Post("login")
    login(@Body() body: userLoginParams, @Res() resp: Response) {
        this.usersService.find(body.account, body.password)
            .then(res => {
                let msg = "登录成功", code = 0
                res.length === 0 && (msg = "密码错误", code = 2002)
                resp.status(HttpStatus.OK).send({ code, msg })
            })
            .catch(err => {
                console.error(`${body.username}登录失败：${err}`);
                resp.status(HttpStatus.OK).send({ code: 2003, msg: "登录失败" });
            })
    }
    @Delete()
    logout(@Query("id") id: number, @Res() resp: Response) {
        this.usersService.delete(id)
            .then(() => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "注销成功" });
            })
            .catch(err => {
                console.error(`用户注销失败：${err}`);
                resp.status(HttpStatus.OK).send({ code: 2004, msg: "注销失败" });
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
                resp.status(HttpStatus.OK).send({ code: 2005, msg: "查询失败" });
            })
    }
}