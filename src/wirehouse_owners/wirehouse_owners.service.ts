import { Injectable } from '@nestjs/common';
import { CreateWirehouseOwnerDto } from './dto/create-wirehouse_owner.dto';
import { UpdateWirehouseOwnerDto } from './dto/update-wirehouse_owner.dto';

@Injectable()
export class WirehouseOwnersService {
  create(createWirehouseOwnerDto: CreateWirehouseOwnerDto) {
    return 'This action adds a new wirehouseOwner';
  }

  findAll() {
    return `This action returns all wirehouseOwners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wirehouseOwner`;
  }

  update(id: number, updateWirehouseOwnerDto: UpdateWirehouseOwnerDto) {
    return `This action updates a #${id} wirehouseOwner`;
  }

  remove(id: number) {
    return `This action removes a #${id} wirehouseOwner`;
  }
}
