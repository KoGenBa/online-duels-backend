import { Module } from '@nestjs/common';
import { BulletRainService } from './bullet-rain.service';
import { BulletRainGateway } from './bullet-rain.gateway';

@Module({
  providers: [BulletRainGateway, BulletRainService],
})
export class BulletRainModule {}
