import { Test, TestingModule } from '@nestjs/testing';
import { WirehousesService } from './wirehouses.service';

describe('WirehousesService', () => {
  let service: WirehousesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WirehousesService],
    }).compile();

    service = module.get<WirehousesService>(WirehousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
