import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WirehouseOwnersService } from './wirehouse_owners.service';
import { CreateWirehouseOwnerDto } from './dto/create-wirehouse_owner.dto';
import { UpdateWirehouseOwnerDto } from './dto/update-wirehouse_owner.dto';

@Controller('wirehouse-owners')
export class WirehouseOwnersController {
  constructor(private readonly wirehouseOwnersService: WirehouseOwnersService) {}

  @Post()
  create(@Body() createWirehouseOwnerDto: CreateWirehouseOwnerDto) {
    return this.wirehouseOwnersService.create(createWirehouseOwnerDto);
  }

  @Get()
  findAll() {
    return this.wirehouseOwnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wirehouseOwnersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWirehouseOwnerDto: UpdateWirehouseOwnerDto) {
    return this.wirehouseOwnersService.update(+id, updateWirehouseOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wirehouseOwnersService.remove(+id);
  }
}
