import { Controller, Post, Body } from '@nestjs/common';
import { CrearCredencialesUseCase } from '../../../application/use-cases/crear-credenciales.use-case';
import { crearCredencialesDto } from './dto/crear-credenciales.dto';

@Controller('Credenciales')
export class CredencialesController {
  constructor(private readonly crearUseCase: CrearCredencialesUseCase) {}

  @Post()
  crear(@Body() body: crearCredencialesDto) {
    return this.crearUseCase.execute(body);
  }
}
