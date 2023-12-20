import { writeFileSync } from "fs";
import { resolve } from "path"
import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Res } from "@nestjs/common";
import { saveArticleParams } from "src/interfaces/article.interface";
import { ArticlesService } from "src/services/articles.service";
import { Response } from "express";

@Controller("articles")
export class ArticlesController {
    constructor(private articlesService: ArticlesService) { }
    @Post()
    save(@Query("uuid") userId: number, @Body() body: saveArticleParams, @Res() resp: Response) {
        const config = {
            userId,
            title: body.title,
            tags: body.tags,
            summary: body.summary,
            commentCnt: 0,
            thumb: 0,
            views: 0,
            collection: 0,
            coverImg: body.coverImg
        }
        this.articlesService.create(config)
            .then((res) => {
                writeFileSync(resolve(__dirname, `../../assets/${userId}/${res.id}.txt`), body.content);
                resp.status(HttpStatus.OK).send({ code: 0, msg: "上传成功" });
            })
            .catch((err) => {
                console.error(`文章上传失败：${err}`);
                resp.status(HttpStatus.OK).send({ code: 1001, msg: "上传失败" });
            });
    }
    @Put()
    update(@Query("id") id: number, @Body() body: saveArticleParams, @Res() resp: Response) {
        const config: Record<string, string | number | string[]> = {};
        body.content && Object.assign(config, { content: body.content });
        body.coverImg && Object.assign(config, { coverImg: body.coverImg });
        body.summary && Object.assign(config, { summary: body.summary });
        body.tags && Object.assign(config, { tags: body.tags });
        body.title && Object.assign(config, { title: body.title });

        this.articlesService.modify(id, config)
            .then(() => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "更新成功" });
            })
            .catch(err => {
                console.error(`文章更新失败：${err}`)
                resp.status(HttpStatus.OK).send({ code: 1002, msg: "更新失败" });
            })
    }
    @Delete()
    remove(@Query("id") id: number, @Res() resp: Response) {
        this.articlesService.delete(id)
            .then(() => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "删除成功" });
            })
            .catch((err) => {
                console.error(`文章删除失败：${err}`);
                resp.status(HttpStatus.OK).send({ code: 1003, msg: "删除失败" });
            });
    }
    @Get()
    find(@Query("page_num") page_num: number, @Query("page_size") page_size: number, @Body() body: { condition: number, args: number[] | string }, @Res() resp: Response) {
        this.articlesService.pageFind(page_num, page_size, body.condition, body.args)
            .then(res => {
                resp.status(HttpStatus.OK).send({ code: 0, msg: "查询成功", res });
            })
            .catch(err => {
                console.error(`文章查询失败：${err}`);
                resp.status(HttpStatus.OK).send({ code: 1004, msg: "查询失败" });
            })
    }
}