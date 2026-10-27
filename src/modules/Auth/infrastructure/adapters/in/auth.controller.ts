import { Controller, Post, Body } from '@nestjs/common';
import { LoginUseCase } from '../../../application/use-cases/login.use-case';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  login(@Body() body: loginDto) {
    return this.loginUseCase.execute(body);
  }
}
