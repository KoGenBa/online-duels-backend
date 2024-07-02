import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { TicTacToeService } from './tic-tac-toe.service';
import { CreateTicTacToeDto } from './dto/create-tic-tac-toe.dto';
import { UpdateTicTacToeDto } from './dto/update-tic-tac-toe.dto';

@WebSocketGateway()
export class TicTacToeGateway {
  constructor(private readonly ticTacToeService: TicTacToeService) {}

  @SubscribeMessage('createTicTacToe')
  create(@MessageBody() createTicTacToeDto: CreateTicTacToeDto) {
    return this.ticTacToeService.create(createTicTacToeDto);
  }

  @SubscribeMessage('findAllTicTacToe')
  findAll() {
    return this.ticTacToeService.findAll();
  }

  @SubscribeMessage('findOneTicTacToe')
  findOne(@MessageBody() id: number) {
    return this.ticTacToeService.findOne(id);
  }

  @SubscribeMessage('updateTicTacToe')
  update(@MessageBody() updateTicTacToeDto: UpdateTicTacToeDto) {
    return this.ticTacToeService.update(updateTicTacToeDto.id, updateTicTacToeDto);
  }

  @SubscribeMessage('removeTicTacToe')
  remove(@MessageBody() id: number) {
    return this.ticTacToeService.remove(id);
  }
}
