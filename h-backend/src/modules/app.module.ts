import { Module } from "@nestjs/common";
import { ArticlesModule } from "./articles.module";
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "123456",
            database: "h_db",
            autoLoadEntities: true,  // 自动加载实体配置
            synchronize: true,  // 是否将实体同步到数据库
            entities: ['src/entities/*.ts']
        }),
        ArticlesModule
    ]
})
export class AppModule { }