import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import * as Joi from 'joi';
import { ApiProperty } from '@nestjs/swagger/dist';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'Название поста сотрудника',
  })
  name_post: string;

  @ApiProperty({
    description: 'Запралата для данной должности',
  })
  salary: number;
}

export const updatePostSchema = Joi.object({
  name_post: Joi.string().required(),
  salary: Joi.number().required(),
});
