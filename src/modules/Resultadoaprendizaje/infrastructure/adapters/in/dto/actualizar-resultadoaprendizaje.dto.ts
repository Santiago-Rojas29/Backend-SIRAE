import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarResultadoaprendizajeDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  codigo?: string;
}
