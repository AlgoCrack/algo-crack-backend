import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';

@Module({
  imports: [],
  controllers: [ProblemController],
  providers: [ProblemService],
  exports: [ProblemService],
})
export class ProblemModule {}
