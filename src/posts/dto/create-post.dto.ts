import { ApiProperty } from '@nestjs/swagger/dist';
import * as Joi from 'joi';

export class CreatePostDto {
  @ApiProperty({
    description: 'Название поста сотрудника',
  })
  name_post: string;

  @ApiProperty({
    description: 'Запралата для данной должности',
  })
  salary: number;
}

export const createPostSchema = Joi.object({
  name_post: Joi.string().required(),
  salary: Joi.number().required(),
});
