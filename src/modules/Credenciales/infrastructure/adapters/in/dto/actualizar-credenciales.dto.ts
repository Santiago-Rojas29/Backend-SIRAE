import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarCredencialesDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  codigo?: string;
}
