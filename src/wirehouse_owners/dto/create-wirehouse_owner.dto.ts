import { ApiProperty } from '@nestjs/swagger/dist';
import * as Joi from 'joi';

export class CreateWirehouseOwnerDto {
  @ApiProperty({
    description: 'Название организации, владеющей складом',
  })
  name_organisation: string;

  @ApiProperty({
    description: 'Пароль',
  })
  password: string;
}

export const createWirehouseOwnerSchema = Joi.object({
  name_organisation: Joi.string().required(),
  password: Joi.number().required().min(3),
});
