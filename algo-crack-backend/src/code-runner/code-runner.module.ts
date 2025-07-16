import { Module } from '@nestjs/common';
import { CodeRunnerService } from './code-runner.service';
import { CodeRunnerController } from './code-runner.controller';
import { ProblemModule } from 'src/problem/problem.module';

@Module({
  imports: [ProblemModule],
  controllers: [CodeRunnerController],
  providers: [CodeRunnerService],
})
export class CodeRunnerModule {}
