import { Module } from "@nestjs/common";
import { ArticlesController } from "src/controllers/articles.controller";
import { ArticlesService } from "src/services/articles.service";

@Module({
    providers: [ArticlesService],
    controllers: [ArticlesController]
})
export class ArticlesModule {}