import { BadRequestException } from '@nestjs/common';

export enum EstadoRegistroNovedad {
  Pendiente = 'pendiente',
  Registrada = 'registrada',
  NoEnFormacion = 'no_en_formacion',
  NoEncontrado = 'no_encontrado',
  RevisarExistente = 'revisar_existente',
}

export class Novedad {
  constructor(
    public readonly id_novedad: string,
    public matricula_id_FK: string,
    public tipo_novedad_id_FK: string,
    public fecha_novedad: Date,
    public solicitud_respondida: boolean,
    public estado_registro: EstadoRegistroNovedad,
    public resolucion_id_FK?: string,
    public fecha_registro_sofia?: Date,
    public verificacion?: string,
    public observaciones?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.matricula_id_FK) throw new BadRequestException('La matricula es obligatoria');
    if (!this.tipo_novedad_id_FK) throw new BadRequestException('El tipo de novedad es obligatorio');
    if (!this.fecha_novedad) throw new BadRequestException('La fecha de la novedad es obligatoria');
    if (!Object.values(EstadoRegistroNovedad).includes(this.estado_registro)) {
      throw new BadRequestException('El estado de registro no es valido');
    }
  }
}
