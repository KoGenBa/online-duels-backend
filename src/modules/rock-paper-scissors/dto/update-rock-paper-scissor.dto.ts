import { PartialType } from '@nestjs/mapped-types';
import { CreateRockPaperScissorDto } from './create-rock-paper-scissor.dto';

export class UpdateRockPaperScissorDto extends PartialType(CreateRockPaperScissorDto) {}
