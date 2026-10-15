import { IsNotEmpty, IsOptional,IsEmail, IsString } from 'class-validator';
import { EstadoUsuario, TipoDocumento, TipoUsuario } from 'src/modules/Usuario/domain/entities/Usuario.entity';

export class actualizarUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  centro_id_Fk!:string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  correo!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password!:string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  tipo_usuario!:TipoUsuario

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  estado_usuario!:EstadoUsuario

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  numero_documento!:string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  tipo_documento!:TipoDocumento
}
