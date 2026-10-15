import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarProgramaDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  codigo?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  version?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nivel_formacion?: string;
}
