import { User } from "src/modules/users/entities/user.entity";

export class LoginResDto {
    constructor(user: User, token: string) {
        this.username = user.username;
        this.isAdmin = user.isAdmin;
        this.email = user.email;
        this.token = token;
    }
    username: string;
    email: string;
    isAdmin: boolean;
    token: string;
}