import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Articles } from "src/entities/articles.entity";
import { IArticle } from "src/interfaces/article.interface";
import { Repository } from "typeorm";

@Injectable()
export class ArticlesService {
    constructor(@InjectRepository(Articles) private articleRepository: Repository<Articles>) { }
    async create(article: IArticle) {
        return this.articleRepository.save(article)
    }
}