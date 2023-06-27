import { Module } from '@nestjs/common';
import { WirehouseOwnersService } from './wirehouse_owners.service';
import { WirehouseOwnersController } from './wirehouse_owners.controller';

@Module({
  controllers: [WirehouseOwnersController],
  providers: [WirehouseOwnersService]
})
export class WirehouseOwnersModule {}
