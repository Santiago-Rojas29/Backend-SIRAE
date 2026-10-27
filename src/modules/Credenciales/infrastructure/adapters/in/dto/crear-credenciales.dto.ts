import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class crearCredencialesDto {
  @IsUUID()
  @IsNotEmpty()
  centro_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  tipo_credenciales_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  usuario!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  contrasena!: string;
}
