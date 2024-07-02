import { Test, TestingModule } from '@nestjs/testing';
import { RockPaperScissorsController } from './rock-paper-scissors.controller';
import { RockPaperScissorsService } from './rock-paper-scissors.service';

describe('RockPaperScissorsController', () => {
  let controller: RockPaperScissorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RockPaperScissorsController],
      providers: [RockPaperScissorsService],
    }).compile();

    controller = module.get<RockPaperScissorsController>(RockPaperScissorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
