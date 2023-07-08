import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { WirehouseOwnersService } from './wirehouse_owners.service';
import { CreateWirehouseOwnerDto } from './dto/create-wirehouse_owner.dto';
import { UpdateWirehouseOwnerDto } from './dto/update-wirehouse_owner.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WarehouseOwner')
@Controller('wirehouse-owners')
export class WirehouseOwnersController {
  constructor(
    private readonly wirehouseOwnersService: WirehouseOwnersService,
  ) {}

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWirehouseOwnerDto: UpdateWirehouseOwnerDto,
  ) {
    return this.wirehouseOwnersService.update(+id, updateWirehouseOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(1111111);

    return this.wirehouseOwnersService.remove(+id);
  }
}
