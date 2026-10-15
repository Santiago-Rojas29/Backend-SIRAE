import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class actualizarUsuarioRolDto {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  usuario_id_FK?: string;

  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  rol_id_FK?: string;
}
