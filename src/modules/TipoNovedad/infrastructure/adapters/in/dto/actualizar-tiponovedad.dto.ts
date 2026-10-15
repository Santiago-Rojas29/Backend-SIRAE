import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarTipoNovedadDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  codigo?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descripcion?: string;
}
