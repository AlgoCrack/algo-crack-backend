import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProblemService } from './problem.service';
import { CreateProblemReq, Problem, UpdateProblemReq } from './problem.dto';

@Controller('/api/problem')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Post()
  async create(@Body() body: CreateProblemReq): Promise<Problem> {
    const { title, description } = body;
    const res = await this.problemService.create(title, description);
    return res;
  }

  @Get()
  async findAll(): Promise<Problem[]> {
    const res = await this.problemService.findAll();
    return res;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Problem> {
    const problem = await this.problemService.findOne(id);
    if (!problem) {
      throw new NotFoundException('Problem not found');
    }
    return problem;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProblemReq,
  ): Promise<Problem> {
    const { title, description } = body;
    const res = await this.problemService.update(id, title, description);
    return res;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.problemService.remove(id);
  }
}
