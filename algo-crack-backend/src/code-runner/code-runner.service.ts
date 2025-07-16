import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { handleAxiosError } from 'src/utils/error-utils';
import { ExcuteCodeRes } from './code-runner.dto';
import { ProblemService } from 'src/problem/problem.service';

@Injectable()
export class CodeRunnerService {
  private codeRunnerServiceUrl = process.env.CODE_RUNNER_SERVICE_URL;

  constructor(private readonly problemService: ProblemService) {}

  async executeCode(
    problemId: number,
    language: string,
    code: string,
  ): Promise<ExcuteCodeRes> {
    try {
      // 取得 problem 的 test case
      const { testCases } = await this.problemService.findOne(problemId);

      // 送到 code-runner 執行程式碼
      const response = await axios.post(
        `${this.codeRunnerServiceUrl}/api/code-runner`,
        {
          testCases,
          language,
          code,
        },
      );
      return response.data as ExcuteCodeRes;
    } catch (error) {
      handleAxiosError(error);
    }
  }
}
