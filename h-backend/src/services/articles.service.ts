import { Injectable } from "@nestjs/common";
import { IArticle } from "src/interfaces/article.interface";

@Injectable()
export class ArticlesService {
    private readonly articles: IArticle[] = [];
}