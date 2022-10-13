import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dayjs from 'dayjs'
import { UserToken } from 'src/commons/user-token';
import { UsersService } from '../users/users.service';
import { LoginReqDto } from './dtos/login-request.dto';
import { LoginResDto } from './dtos/login-response.dto';

@Controller('auth')
export class AuthController {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    @Post("login")
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginReqDto) {
        const user = await this.usersService.validateUser(loginDto.username, loginDto.password);
        const userToken: UserToken = {
            signedAt: +dayjs(),
            userId: user.id
        }
        const token = this.jwtService.sign(userToken);
        const res = new LoginResDto(user, token);
        return res;
    }
}
