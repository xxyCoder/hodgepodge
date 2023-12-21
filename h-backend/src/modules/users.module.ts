import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "src/controllers/users.controller";
import { Users } from "src/entities/users";
import { EncryptPassword, VerifyRegistryParamsNotNull, verifyLoginAndLogoutParamsNotNull, verifyModifyInfoParamsNotNull } from "src/middlewares/user.middlewares";
import { UsersService } from "src/services/users.service";

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([Users])]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(VerifyRegistryParamsNotNull, EncryptPassword).forRoutes("registry");
        consumer.apply(verifyLoginAndLogoutParamsNotNull, EncryptPassword).forRoutes("login");
        consumer.apply(verifyModifyInfoParamsNotNull, EncryptPassword).forRoutes({ path: "", method: RequestMethod.PUT });
        consumer.apply(verifyLoginAndLogoutParamsNotNull, EncryptPassword).forRoutes({ path: "", method: RequestMethod.DELETE })
    }
}