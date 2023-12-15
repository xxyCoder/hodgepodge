import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Articles } from "src/entities/articles.entity";
import { IArticle } from "src/interfaces/article.interface";
import { pageConditions } from "src/interfaces/conditions.interface"
import { Repository } from "typeorm";

@Injectable()
export class ArticlesService {
    constructor(@InjectRepository(Articles) private articleRepository: Repository<Articles>) { }
    create(article: IArticle) {
        return this.articleRepository.save(article)
    }
    delete(id: number) {
        return this.articleRepository.delete(id);
    }
    modify(id: number, args: Record<string, number | string | string[]>) {
        return this.articleRepository.update(id, args);
    }
    pageFind(page_num: number, page_size: number, condition: pageConditions, args: number[] | string = '') {
        let query = this.articleRepository.createQueryBuilder("articles");
        if (condition === pageConditions.followerIds) {
            query = query
                .where("articles.userId in (:userIds)", { userIds: args })
                .orderBy("articles.date", "DESC")
        } else if (condition === pageConditions.title) {
            query = query
                .where("articles.title = :title", { title: args })
                .orderBy("articles.thumb", "DESC")
        } else if (condition === pageConditions.creatTime) {
            query = query
                .orderBy("articles.date", "DESC")
        } else if (condition === pageConditions.name) {
            query = query
                .where("articles.username = :username", { username: args })
                .orderBy("articles.date", "DESC")
        }
        return query
            .skip((page_size - 1) * page_num)
            .take(page_num)
    }
}