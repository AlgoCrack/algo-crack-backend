import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemModule } from './problem/problem.module';
import { CodeRunnerModule } from './code-runner/code-runner.module';

@Module({
  imports: [ProblemModule, CodeRunnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
