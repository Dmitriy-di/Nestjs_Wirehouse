import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment'
import { Contract } from './entities/contract.entity';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(Contract)
    private repository: Repository<Contract>
  ){ }

  create(data: CreateContractDto) {
    return this.repository.save({
      ...data,
      date_contract: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }

  update(id: number, data: UpdateContractDto) {
    return this.repository.save({
      ...data,
      id,
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  }

  remove(id: number) {
    return this.repository.delete({id});
  }
}
