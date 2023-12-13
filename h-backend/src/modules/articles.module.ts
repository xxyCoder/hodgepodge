import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticlesController } from "src/controllers/articles.controller";
import { Articles } from "src/entities/articles.entity";
import { ArticlesService } from "src/services/articles.service";

@Module({
    providers: [ArticlesService],
    controllers: [ArticlesController],
    imports: [TypeOrmModule.forFeature([Articles])]
})
export class ArticlesModule {}