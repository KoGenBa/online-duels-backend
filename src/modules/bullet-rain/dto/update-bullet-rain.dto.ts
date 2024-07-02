import { PartialType } from '@nestjs/mapped-types';
import { CreateBulletRainDto } from './create-bullet-rain.dto';

export class UpdateBulletRainDto extends PartialType(CreateBulletRainDto) {
  id: number;
}
