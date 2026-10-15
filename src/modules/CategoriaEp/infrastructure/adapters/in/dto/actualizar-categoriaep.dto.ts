import { IsOptional, IsString, MaxLength } from 'class-validator';

export class actualizarCategoriaEpDto {
  @IsString()
  @MaxLength(100)
  @IsOptional()
  nombre?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  nombre_sofia?: string;
}
