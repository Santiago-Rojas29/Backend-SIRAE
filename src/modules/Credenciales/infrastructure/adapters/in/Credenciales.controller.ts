import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CrearCredencialesUseCase } from '../../../application/use-cases/crear-credenciales.use-case';
import { crearCredencialesDto } from './dto/crear-credenciales.dto';
import { obtenerTodosCredencialesUseCase } from '../../../application/use-cases/obtener-todos.use-case';
import { obtenerCredencialesPorIdUseCase } from '../../../application/use-cases/obtener-por-id.use-case';
import { eliminarCredencialesUseCase } from '../../../application/use-cases/eliminar-credenciales.use-case';
import { aCredencialRespuesta } from './dto/credencial-respuesta.dto';

@Controller('Credenciales')
export class CredencialesController {
  constructor(
    private readonly crearUseCase: CrearCredencialesUseCase,
    private readonly obtenerTodosUseCase: obtenerTodosCredencialesUseCase,
    private readonly obtenerPorIdUseCase: obtenerCredencialesPorIdUseCase,
    private readonly eliminarUseCase: eliminarCredencialesUseCase,
  ) {}

  @Post()
  async crear(@Body() body: crearCredencialesDto) {
    const credencial = await this.crearUseCase.execute(body);
    return aCredencialRespuesta(credencial);
  }

  @Get()
  async listar() {
    const credenciales = await this.obtenerTodosUseCase.execute();
    return credenciales.map(aCredencialRespuesta);
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: string) {
    const credencial = await this.obtenerPorIdUseCase.execute(id);
    return credencial ? aCredencialRespuesta(credencial) : null;
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.eliminarUseCase.execute(id);
  }
}
