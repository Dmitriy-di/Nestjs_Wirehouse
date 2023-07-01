import { PartialType } from '@nestjs/mapped-types';
import { CreateWirehouseOwnerDto } from './create-wirehouse_owner.dto';

export class UpdateWirehouseOwnerDto extends PartialType(
  CreateWirehouseOwnerDto,
) {}
