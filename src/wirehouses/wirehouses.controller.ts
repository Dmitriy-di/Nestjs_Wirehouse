import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WirehousesService } from './wirehouses.service';
import { CreateWirehouseDto } from './dto/create-wirehouse.dto';
import { UpdateWirehouseDto } from './dto/update-wirehouse.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
@ApiTags('Wirehouses')
@Controller('wirehouses')
export class WirehousesController {
  constructor(private readonly wirehousesService: WirehousesService) {}

  @Post()
  create(@Body() createWirehouseDto: CreateWirehouseDto) {
    return this.wirehousesService.create(createWirehouseDto);
  }

  @Get()
  findAll() {
    return this.wirehousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wirehousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWirehouseDto: UpdateWirehouseDto) {
    return this.wirehousesService.update(+id, updateWirehouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wirehousesService.remove(+id);
  }
}
