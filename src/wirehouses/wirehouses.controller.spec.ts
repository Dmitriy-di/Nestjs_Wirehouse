import { Test, TestingModule } from '@nestjs/testing';
import { WirehousesController } from './wirehouses.controller';
import { WirehousesService } from './wirehouses.service';

describe('WirehousesController', () => {
  let controller: WirehousesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WirehousesController],
      providers: [WirehousesService],
    }).compile();

    controller = module.get<WirehousesController>(WirehousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
