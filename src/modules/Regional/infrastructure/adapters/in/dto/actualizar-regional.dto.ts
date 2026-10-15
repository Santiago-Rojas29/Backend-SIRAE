import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class actualizarRegionalDto{

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    nombre!: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    codigo!: string


}