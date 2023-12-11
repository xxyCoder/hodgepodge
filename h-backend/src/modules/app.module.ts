import { Module } from "@nestjs/common";
import { ArticlesModule } from "./articles.module";

@Module({
    imports: [ArticlesModule]
})
export class AppModule {}