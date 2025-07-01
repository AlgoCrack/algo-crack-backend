import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { handleAxiosError } from 'src/utils/error-utils';
import { Problem, UpdateProblemReq } from './problem.dto';

@Injectable()
export class ProblemService {
  private problemServiceUrl =
    process.env.PROBLEM_SERVICE_URL || 'http://localhost:3001';

  async create(title: string, description: string): Promise<Problem> {
    try {
      const response = await axios.post(
        `${this.problemServiceUrl}/api/problem`,
        {
          title,
          description,
        },
      );
      return response.data as Problem;
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async findAll(): Promise<Problem[]> {
    try {
      const response = await axios.get(`${this.problemServiceUrl}/api/problem`);
      return response.data as Problem[];
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async findOne(id: number): Promise<Problem> {
    try {
      const response = await axios.get(
        `${this.problemServiceUrl}/api/problem/${id}`,
      );
      return response.data as Problem;
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async update(
    id: number,
    title?: string,
    description?: string,
  ): Promise<Problem> {
    try {
      const data: UpdateProblemReq = {};

      if (title) {
        data.title = title;
      }

      if (description) {
        data.description = description;
      }

      const response = await axios.patch(
        `${this.problemServiceUrl}/api/problem/${id}`,
        data,
      );
      return response.data as Problem;
    } catch (error) {
      handleAxiosError(error);
    }
  }

  async remove(id: number) {
    try {
      await axios.delete(`${this.problemServiceUrl}/api/problem/${id}`);
    } catch (error) {
      handleAxiosError(error);
    }
  }
}
