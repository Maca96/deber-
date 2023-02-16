import { Module } from '@nestjs/common';
import { clientesController } from './clientes.controller';
import { clientesService } from './clientes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { clientes } from '../common/models/clientes.models';
import { clientesSchema } from './schema/clientes.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:clientes.name,
      useFactory:()=>{
        return clientesSchema;
      }
    }])
  ],
  controllers: [clientesController],
  providers: [clientesService]
})
export class clientesModule {}
