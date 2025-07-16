import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CodeRunnerService } from './code-runner.service';
import { ExcuteCodeRes, ExecuteCodeReq } from './code-runner.dto';

@Controller('/api/code-runner')
export class CodeRunnerController {
  constructor(private readonly codeRunnerService: CodeRunnerService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async executeCode(@Body() body: ExecuteCodeReq): Promise<ExcuteCodeRes> {
    const { problemId, language, code } = body;
    const res = await this.codeRunnerService.executeCode(
      problemId,
      language,
      code,
    );
    return res;
  }
}
