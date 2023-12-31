import Users, { UserModel } from "@src/model/users.modle";
import { Op } from "sequelize";

class UserService {
    create({ username, password, account }: UserModel) {
        return Users.create({ username, password, account });
    }
    update({ username, password, id, newPassword }: Partial<UserModel & { newPassword: string }>) {
        const whereOp = { id, password };
        const updateOp = {};
        username && Object.assign(updateOp, { username });
        newPassword && Object.assign(updateOp, { password: newPassword });

        return Users.update(updateOp, { where: whereOp });
    }
    remove({ id, password }: Partial<UserModel>) {
        return Users.destroy({ where: { id, password } });
    }
    find(page_size: number, page_num: number, username?: string) {
        const whereOp = {};
        username && Object.assign(whereOp, { username: { [Op.like]: `%${username}%` } });  // 实现模糊查询

        return Users.findAll({ offset: (page_num - 1) * page_size, limit: page_size, where: whereOp });
    }
    precisionFind({ username, account, password, id }: Partial<UserModel>) {
        const whereOp = {};
        username && Object.assign(whereOp, { username });
        account && Object.assign(whereOp, { account });
        password && Object.assign(whereOp, { password });
        id && Object.assign(whereOp, { id });

        return Users.findOne({ where: whereOp });
    }
}

export default new UserService()