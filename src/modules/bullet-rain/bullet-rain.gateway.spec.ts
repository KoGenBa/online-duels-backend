import { Test, TestingModule } from '@nestjs/testing';
import { BulletRainGateway } from './bullet-rain.gateway';
import { BulletRainService } from './bullet-rain.service';

describe('BulletRainGateway', () => {
  let gateway: BulletRainGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulletRainGateway, BulletRainService],
    }).compile();

    gateway = module.get<BulletRainGateway>(BulletRainGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
