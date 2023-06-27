import { Injectable } from '@nestjs/common';
import { CreateWirehouseDto } from './dto/create-wirehouse.dto';
import { UpdateWirehouseDto } from './dto/update-wirehouse.dto';

@Injectable()
export class WirehousesService {
  create(createWirehouseDto: CreateWirehouseDto) {
    return 'This action adds a new wirehouse';
  }

  findAll() {
    return `This action returns all wirehouses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wirehouse`;
  }

  update(id: number, updateWirehouseDto: UpdateWirehouseDto) {
    return `This action updates a #${id} wirehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} wirehouse`;
  }
}
