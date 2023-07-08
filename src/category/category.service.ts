import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';
@Injectable()
export class CategoryService {
  private repository: Category[];

  constructor() {
    this.repository = [];
  }

  create(createCategoryInput: CreateCategoryInput) {
    this.repository.push(createCategoryInput);
    return createCategoryInput;
  }

  findAll() {
    return this.repository;
  }

  findOne(id: number) {
    return this.repository.find((item) => item.id === id);
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
