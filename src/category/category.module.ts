import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CategoryResolver, CategoryService],
  imports: [TypeOrmModule.forFeature([Category])],
})
export class CategoryModule {}
