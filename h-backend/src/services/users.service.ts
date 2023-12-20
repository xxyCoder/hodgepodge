import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/users";
import { IUsers, userModParams, userOutParams } from "src/interfaces/users.interface";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }
    create(user: IUsers) {
        return this.usersRepository.save(user);
    }
    delete(id: number, args: userOutParams) {
        return this.usersRepository.delete({ id, ...args });
    }
    modify(id: number, args: userModParams) {
        return this.usersRepository.update(id, args);
    }
    pageFind(page_num: number, page_size: number, username: string) {
        let query = this.usersRepository.createQueryBuilder("users");
        return query
            .where("users.username like :username", { username: `%${username}%` })
            .skip((page_size - 1) * page_num)
            .take(page_num)
            .getMany()
    }
    find(args: userOutParams) {
        return this.usersRepository.find({ where: args });
    }
}