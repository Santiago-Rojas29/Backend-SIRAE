import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarAlternativaepDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  texto_sofia!: string;
}
