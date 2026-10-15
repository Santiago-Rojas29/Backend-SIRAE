import { IsNotEmpty, IsUUID } from 'class-validator';

export class crearUsuarioRolDto {
  @IsUUID()
  @IsNotEmpty()
  usuario_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  rol_id_FK!: string;
}
