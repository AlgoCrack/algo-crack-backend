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
  @UsePipes(ValidationPipe)
  async create(@Body() body: CreateProblemReq): Promise<Problem> {
    const { title, description, testCases } = body;
    const res = await this.problemService.create(title, description, testCases);
    return res;
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Problem[]> {
    const res = await this.problemService.findAll();
    return res;
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Problem> {
    const problem = await this.problemService.findOne(id);
    if (!problem) {
      throw new NotFoundException('Problem not found');
    }
    return problem;
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProblemReq,
  ): Promise<Problem> {
    const { title, description } = body;
    const res = await this.problemService.update(id, title, description);
    return res;
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.problemService.remove(id);
  }
}
