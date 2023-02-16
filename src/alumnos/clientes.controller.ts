import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { clientesService } from './clientes.service';
import { clientesDTO } from './dto/clientes.dto';

@Controller('api/v1/clientes')
export class clientesController {
    constructor(private readonly clientesServicio:clientesService){}
//llamada al controlados para insertar
    @Post()
    insertar(@Body() clientesDTO:clientesDTO){
        return this.clientesServicio.Insertar(clientesDTO);
    }
    @Get()
    todos(){
        return this.clientesServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.clientesServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() clientesDTO:clientesDTO){
        return this.clientesServicio.actualizar(id, clientesDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.clientesServicio.eliminar(id);
    }
}
