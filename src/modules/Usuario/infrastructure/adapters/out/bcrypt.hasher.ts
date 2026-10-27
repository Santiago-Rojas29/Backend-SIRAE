import { Injectable } from "@nestjs/common";
import { HasherPort } from "src/modules/Usuario/domain/ports/hasher.port";
import * as bcrypt from 'bcrypt'

@Injectable()
export class BcryptHasher implements HasherPort{
    private readonly SALT_ROUNDS=10;
    
    hashear(textoPlano: string): Promise<string> {
        return bcrypt.hash(textoPlano,this.SALT_ROUNDS);

    }

    comparar(textoPlano: string, hash: string): Promise<Boolean> {
        return bcrypt.compare(textoPlano,hash)
    }
}