import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RockPaperScissorsService } from './rock-paper-scissors.service';
import { CreateRockPaperScissorDto } from './dto/create-rock-paper-scissor.dto';
import { UpdateRockPaperScissorDto } from './dto/update-rock-paper-scissor.dto';

@Controller('rock-paper-scissors')
export class RockPaperScissorsController {
  constructor(private readonly rockPaperScissorsService: RockPaperScissorsService) {}

  @Post()
  create(@Body() createRockPaperScissorDto: CreateRockPaperScissorDto) {
    return this.rockPaperScissorsService.create(createRockPaperScissorDto);
  }

  @Get()
  findAll() {
    return this.rockPaperScissorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rockPaperScissorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRockPaperScissorDto: UpdateRockPaperScissorDto) {
    return this.rockPaperScissorsService.update(+id, updateRockPaperScissorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rockPaperScissorsService.remove(+id);
  }
}
