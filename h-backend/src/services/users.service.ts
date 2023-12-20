import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/users";
import { IUsers } from "src/interfaces/users.interface";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }
    create(user: IUsers) {
        return this.usersRepository.save(user);
    }
    delete(id: number) {
        return this.usersRepository.delete(id);
    }
    modify(id: number, args: Record<string, string>) {
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
    find(account: string, password: string) {
        return this.usersRepository.find({ where: { account, password } });
    }
}