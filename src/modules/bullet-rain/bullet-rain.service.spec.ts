import { Test, TestingModule } from '@nestjs/testing';
import { BulletRainService } from './bullet-rain.service';

describe('BulletRainService', () => {
  let service: BulletRainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulletRainService],
    }).compile();

    service = module.get<BulletRainService>(BulletRainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
