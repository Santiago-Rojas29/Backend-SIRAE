import { IsNotEmpty, IsString } from 'class-validator';

export class crearPermisoDto {
  @IsString()
  @IsNotEmpty()
  modulo!: string;

  @IsString()
  @IsNotEmpty()
  accion!: string;

  @IsString()
  @IsNotEmpty()
  descripcion!: string;
}
