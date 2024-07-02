import { Injectable } from '@nestjs/common';
import { CreateRockPaperScissorDto } from './dto/create-rock-paper-scissor.dto';
import { UpdateRockPaperScissorDto } from './dto/update-rock-paper-scissor.dto';

@Injectable()
export class RockPaperScissorsService {
  create(createRockPaperScissorDto: CreateRockPaperScissorDto) {
    return 'This action adds a new rockPaperScissor';
  }

  findAll() {
    return `This action returns all rockPaperScissors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rockPaperScissor`;
  }

  update(id: number, updateRockPaperScissorDto: UpdateRockPaperScissorDto) {
    return `This action updates a #${id} rockPaperScissor`;
  }

  remove(id: number) {
    return `This action removes a #${id} rockPaperScissor`;
  }
}
