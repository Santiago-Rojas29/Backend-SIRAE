import { IsNotEmpty, IsString } from 'class-validator';

export class crearTipoNovedadDto {
  @IsString()
  @IsNotEmpty()
  codigo!: string;

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  descripcion!: string;
}
