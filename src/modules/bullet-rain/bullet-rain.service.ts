import { Injectable } from '@nestjs/common';
import { CreateBulletRainDto } from './dto/create-bullet-rain.dto';
import { UpdateBulletRainDto } from './dto/update-bullet-rain.dto';

@Injectable()
export class BulletRainService {
  create(createBulletRainDto: CreateBulletRainDto) {
    return 'This action adds a new bulletRain';
  }

  findAll() {
    return `This action returns all bulletRain`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bulletRain`;
  }

  update(id: number, updateBulletRainDto: UpdateBulletRainDto) {
    return `This action updates a #${id} bulletRain`;
  }

  remove(id: number) {
    return `This action removes a #${id} bulletRain`;
  }
}
