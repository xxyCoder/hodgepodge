import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Articles } from "./articles.entity";

@Entity("article_comments")
export class ArticlesComments {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Articles, articles => articles.articleComments)
    article: Articles
    @Column("string")
    comment: string;
}