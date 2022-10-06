import { Controller, Post, Body } from '@nestjs/common';
import { LoginReqDto } from './dtos/login-request.dto';

@Controller('auth')
export class AuthController {
    @Post("login")
    login(@Body() loginDto: LoginReqDto) {
        return `Ok ${loginDto.username}!`;
    }
}
