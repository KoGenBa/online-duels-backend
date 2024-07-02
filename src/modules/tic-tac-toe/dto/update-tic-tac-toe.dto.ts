import { PartialType } from '@nestjs/mapped-types';
import { CreateTicTacToeDto } from './create-tic-tac-toe.dto';

export class UpdateTicTacToeDto extends PartialType(CreateTicTacToeDto) {
  id: number;
}
