import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment'
@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private repository: Repository<Staff>
  ){ }

  create(data: CreateStaffDto) {
    return this.repository.save({
      ...data,
      changed_at: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }

  update(id: number, data: UpdateStaffDto) {
    return this.repository.save({...data,id});
  }

  remove(id: number) {
    return this.repository.delete({id});
  }
}