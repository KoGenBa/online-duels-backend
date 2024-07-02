import { Injectable } from '@nestjs/common';
import { CreateTicTacToeDto } from './dto/create-tic-tac-toe.dto';
import { UpdateTicTacToeDto } from './dto/update-tic-tac-toe.dto';

@Injectable()
export class TicTacToeService {
  create(createTicTacToeDto: CreateTicTacToeDto) {
    return 'This action adds a new ticTacToe';
  }

  findAll() {
    return `This action returns all ticTacToe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticTacToe`;
  }

  update(id: number, updateTicTacToeDto: UpdateTicTacToeDto) {
    return `This action updates a #${id} ticTacToe`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticTacToe`;
  }
}
