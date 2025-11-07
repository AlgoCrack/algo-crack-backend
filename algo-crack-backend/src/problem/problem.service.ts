import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { handleAxiosError } from 'src/utils/error-utils';
import { Problem, TestCasesDto, UpdateProblemReq } from './problem.dto';

@Injectable()
export class ProblemService {
  private problemServiceUrl = process.env.PROBLEM_SERVICE_URL;

  async create(
    title: string,
    description: string,
    testCases: TestCasesDto[],
  ): Promise<Problem> {
    try {
      const response = await axios.post<Problem>(
        `${this.problemServiceUrl}/api/problem`,
        {
          title,
          description,
          testCases,
        },
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async findAll(page: number, pageSize: number): Promise<Problem[]> {
    try {
      const response = await axios.get<Problem[]>(
        `${this.problemServiceUrl}/api/problem?page=${page}&pageSize=${pageSize}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async findOne(id: number): Promise<Problem> {
    try {
      const response = await axios.get<Problem>(
        `${this.problemServiceUrl}/api/problem/${id}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async update(id: number, problem: UpdateProblemReq): Promise<Problem> {
    try {
      const response = await axios.patch<Problem>(
        `${this.problemServiceUrl}/api/problem/${id}`,
        problem,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await axios.delete<void>(`${this.problemServiceUrl}/api/problem/${id}`);
    } catch (error) {
      handleAxiosError(error);
    }
  }
}
