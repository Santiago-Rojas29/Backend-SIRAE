import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarPermisoDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  modulo?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  accion?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descripcion?: string;
}
