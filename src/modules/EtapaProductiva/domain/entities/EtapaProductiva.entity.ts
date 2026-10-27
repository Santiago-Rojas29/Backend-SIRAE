import { BadRequestException } from '@nestjs/common';

export class EtapaProductiva {
  constructor(
    public readonly id_etapaproductiva: string,
    public seleccion_ep_id_FK: string,
    public fecha_inicio: Date,
    public fecha_fin: Date,
    public estado: string,
    public ente_cooformador: string,
    public coordinador_academico: string,
    public instructor_seguimiento: string,
    public fecha_remision_subdirector?: Date,
    public fecha_registro_sofia?: Date,
    public observaciones?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.seleccion_ep_id_FK) throw new BadRequestException('La seleccion de etapa productiva es obligatoria');
    if (!this.fecha_inicio) throw new BadRequestException('La fecha de inicio es obligatoria');
    if (!this.fecha_fin) throw new BadRequestException('La fecha de fin es obligatoria');
    if (!this.estado) throw new BadRequestException('El estado es obligatorio');
    if (!this.ente_cooformador) throw new BadRequestException('El ente cooformador es obligatorio');
    if (!this.coordinador_academico) throw new BadRequestException('El coordinador academico es obligatorio');
    if (!this.instructor_seguimiento) throw new BadRequestException('El instructor de seguimiento es obligatorio');
  }
}
