import { Test, TestingModule } from '@nestjs/testing';
import { WirehouseOwnersController } from './wirehouse_owners.controller';
import { WirehouseOwnersService } from './wirehouse_owners.service';

describe('WirehouseOwnersController', () => {
  let controller: WirehouseOwnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WirehouseOwnersController],
      providers: [WirehouseOwnersService],
    }).compile();

    controller = module.get<WirehouseOwnersController>(WirehouseOwnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
