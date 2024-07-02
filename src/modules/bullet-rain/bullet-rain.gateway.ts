import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { BulletRainService } from './bullet-rain.service';
import { CreateBulletRainDto } from './dto/create-bullet-rain.dto';
import { UpdateBulletRainDto } from './dto/update-bullet-rain.dto';

@WebSocketGateway()
export class BulletRainGateway {
  constructor(private readonly bulletRainService: BulletRainService) {}

  @SubscribeMessage('createBulletRain')
  create(@MessageBody() createBulletRainDto: CreateBulletRainDto) {
    return this.bulletRainService.create(createBulletRainDto);
  }

  @SubscribeMessage('findAllBulletRain')
  findAll() {
    return this.bulletRainService.findAll();
  }

  @SubscribeMessage('findOneBulletRain')
  findOne(@MessageBody() id: number) {
    return this.bulletRainService.findOne(id);
  }

  @SubscribeMessage('updateBulletRain')
  update(@MessageBody() updateBulletRainDto: UpdateBulletRainDto) {
    return this.bulletRainService.update(updateBulletRainDto.id, updateBulletRainDto);
  }

  @SubscribeMessage('removeBulletRain')
  remove(@MessageBody() id: number) {
    return this.bulletRainService.remove(id);
  }
}
