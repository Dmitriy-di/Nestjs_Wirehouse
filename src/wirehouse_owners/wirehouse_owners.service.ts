import { Injectable } from '@nestjs/common';
import { CreateWirehouseOwnerDto } from './dto/create-wirehouse_owner.dto';
import { UpdateWirehouseOwnerDto } from './dto/update-wirehouse_owner.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; 
import { WirehouseOwner } from './entities/wirehouse_owner.entity';
import { hash, compare } from 'bcrypt';

@Injectable()
export class WirehouseOwnersService {
  constructor(
    @InjectRepository(WirehouseOwner)
    private repository: Repository<WirehouseOwner>
  ) { }
  
  async register(data: CreateWirehouseOwnerDto) { 
    //? Выдает ошибку, что не находит модуль bcrypt, хотя он импортируется без проблем
    const saltOrRounds = 10
   data.password = await hash(data.password, saltOrRounds)
    return this.repository.save({
      ...data,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(name_organisation: string) {
    return this.repository.findOneBy({name_organisation});
  }

  async login(data: CreateWirehouseOwnerDto) {
    const user = await this.repository.findOneBy({name_organisation: data.name_organisation});
    if (!user) {
      return false
    }
    return await compare(data.password, user.password)
  }

  update(id: number, data: UpdateWirehouseOwnerDto) {
    return this.repository.save({...data,id})
  }

  remove(id: number) {
    return this.repository.delete({id});
  }
}
