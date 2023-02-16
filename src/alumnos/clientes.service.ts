import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iclientes } from 'src/common/Interfaces/clientes.interface';
import { clientes } from '../common/models/clientes.models';

import { clientesDTO } from './dto/clientes.dto';

@Injectable()
export class clientesService {
  constructor(
    @InjectModel(clientes.name) private readonly clientesmodelo: Model<Iclientes>,
  ) {}

  async Insertar(clientesDTO: clientesDTO): Promise<Iclientes> {
    return await new this.clientesmodelo(clientesDTO).save();
  }
  async todos(): Promise<Iclientes[]> {
    return await this.clientesmodelo.find();
  }
  async uno(id: string): Promise<Iclientes> {
    return await this.clientesmodelo.findById(id);
  }

  async actualizar(id: string, clientesDTO: clientesDTO): Promise<Iclientes> {
    return await this.clientesmodelo.findByIdAndUpdate(id, clientesDTO, {
      new: true,
    });
  }
  async eliminar(id: string) {
    await this.clientesmodelo.findByIdAndDelete(id);
    return {status: HttpStatus.OK, msg:"Se eliminó con éxito"}
  }
}
