import { IsNotEmpty, IsString } from 'class-validator';

export class crearRolDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  descripcion!: string;
}
