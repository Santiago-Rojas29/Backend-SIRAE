import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { EstadoUsuario, TipoDocumento, TipoUsuario } from 'src/modules/Usuario/domain/entities/Usuario.entity';

export class crearUsuarioDto {

  @IsString()
  @IsNotEmpty()
  centro_id_Fk!:string

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  correo!: string;

  @IsString()
  @IsNotEmpty()
  password!:string

  @IsString()
  @IsNotEmpty()
  tipo_usuario!:TipoUsuario

  @IsString()
  @IsNotEmpty()
  estado_usuario!:EstadoUsuario

  @IsString()
  @IsNotEmpty()
  numero_documento!:string

  @IsString()
  @IsNotEmpty()
  tipo_documento!:TipoDocumento


}
