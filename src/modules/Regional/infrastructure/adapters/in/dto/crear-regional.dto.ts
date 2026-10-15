import { IsNotEmpty, IsString } from "class-validator";


export class crearRegionalDto{

    @IsString()
    @IsNotEmpty()
    nombre!: string

    @IsString()
    @IsNotEmpty()
    codigo!: string


}