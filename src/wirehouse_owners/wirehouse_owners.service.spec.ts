import { Test, TestingModule } from '@nestjs/testing';
import { WirehouseOwnersService } from './wirehouse_owners.service';

describe('WirehouseOwnersService', () => {
  let service: WirehouseOwnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WirehouseOwnersService],
    }).compile();

    service = module.get<WirehouseOwnersService>(WirehouseOwnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
