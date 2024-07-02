import { Test, TestingModule } from '@nestjs/testing';
import { RockPaperScissorsService } from './rock-paper-scissors.service';

describe('RockPaperScissorsService', () => {
  let service: RockPaperScissorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RockPaperScissorsService],
    }).compile();

    service = module.get<RockPaperScissorsService>(RockPaperScissorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
