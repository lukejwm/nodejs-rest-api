import UsersDao from '../common/models/dao/users.dao';
import { CRUD } from '../common/interfaces/crud.interface';
import { CreateUserDto } from '../common/models/dto/create.user.dto';
import { PutUserDto } from '../common/models/dto/put.user.dto';
import { PatchUserDto } from '../common/models/dto/patch.user.dto';

class UsersService implements CRUD {
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    }

    async patchById(id: string, resource: PatchUserDto) {
        return UsersDao.patchUserById(id, resource);
    }

    async readById(id: string) {
        return UsersDao.getUserById(id);
    }

    async putById(id: string, resource: PutUserDto) {
        return UsersDao.putUserById(id, resource);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();