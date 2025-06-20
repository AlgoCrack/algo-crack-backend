import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';

@Module({
  imports: [],
  controllers: [ProblemController],
  providers: [ProblemService],
})
export class ProblemModule {}
