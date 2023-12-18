import { Column, Entity, OneToMany } from "typeorm";
import { Basic } from "./basic.abstract";
import { ArticlesComments } from "./articles-comments.entity";

@Entity("articles")
export class Articles extends Basic {
    @Column("string")
    summary: string;
    @Column("simple-array")
    tags: string[];
    @Column("int")
    thumb: number;
    @Column("int")
    views: number;
    @Column("int")
    collection: number;
    @Column("string")
    coverImg: string;
    @OneToMany(() => ArticlesComments, articleComments => articleComments.article)
    articleComments: string
}