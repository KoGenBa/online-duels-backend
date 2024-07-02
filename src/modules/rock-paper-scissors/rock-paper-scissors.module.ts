import { Module } from '@nestjs/common';
import { RockPaperScissorsService } from './rock-paper-scissors.service';
import { RockPaperScissorsController } from './rock-paper-scissors.controller';

@Module({
  controllers: [RockPaperScissorsController],
  providers: [RockPaperScissorsService],
})
export class RockPaperScissorsModule {}
