import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarRolDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descripcion?: string;
}
