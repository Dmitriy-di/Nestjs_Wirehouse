import { Module } from '@nestjs/common';
import { WirehouseOwnersService } from './wirehouse_owners.service';
import { WirehouseOwnersController } from './wirehouse_owners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WirehouseOwner } from './entities/wirehouse_owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WirehouseOwner])],
  controllers: [WirehouseOwnersController],
  providers: [WirehouseOwnersService],
  exports: [WirehouseOwnersService],
})
export class WirehouseOwnersModule {}
