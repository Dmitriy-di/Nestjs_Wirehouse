import { Module } from '@nestjs/common';
import { WirehousesService } from './wirehouses.service';
import { WirehousesController } from './wirehouses.controller';

@Module({
  controllers: [WirehousesController],
  providers: [WirehousesService]
})
export class WirehousesModule {}
