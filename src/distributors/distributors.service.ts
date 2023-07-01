import { Injectable } from '@nestjs/common';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
import { Repository } from 'typeorm';
import { Distributor } from './entities/distributor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
@Injectable()
export class DistributorsService {
  constructor(
    @InjectRepository(Distributor)
    private repository: Repository<Distributor>,
  ) {}

  create(data: CreateDistributorDto) {
    return this.repository.save({
      ...data,
      changed_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdateDistributorDto) {
    return this.repository.save({ ...data, id });
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }
}
