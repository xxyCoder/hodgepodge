import { Controller, Get, Post } from "@nestjs/common";
import { IArticle } from "src/interfaces/article.interface";
import { ArticlesService } from "src/services/articles.service";

@Controller("articles")
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}
}