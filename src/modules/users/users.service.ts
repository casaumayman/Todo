import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    findAll() {
        return this.userRepo.find();
    }

    async validateUser(username: string, password: string) {
        const user = await this.userRepo.findOneBy({username});
        if (!user) {
            throw new Error("User not exist!");
        }
        if (user.password !== password) {
            throw new Error("Password is not correct!");
        }
        return user;
    }
}
