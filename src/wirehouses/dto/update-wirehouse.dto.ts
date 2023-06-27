import { PartialType } from '@nestjs/mapped-types';
import { CreateWirehouseDto } from './create-wirehouse.dto';

export class UpdateWirehouseDto extends PartialType(CreateWirehouseDto) {}
