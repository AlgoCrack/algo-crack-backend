import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

class TestCase {
  @ApiProperty({ description: 'test case id', example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ description: 'problem id', example: 1 })
  @IsInt()
  problemId: number;

  @ApiProperty({ description: 'input', example: '1 + 1 = ?' })
  @IsInt()
  input: object;

  @ApiProperty({ description: 'input', example: 1 })
  @IsInt()
  output: object;

  @ApiProperty({ description: 'created time', example: new Date() })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: 'updated time', example: new Date() })
  @IsDate()
  updatedAt: Date;
}

export class Problem {
  @ApiProperty({ description: 'problem id', example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ description: 'problem title', example: 'Two Sum' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'problem description', example: '1 + 1 = ?' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'created time', example: new Date() })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: 'updated time', example: new Date() })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({ description: '', example: new Date() })
  @IsDate()
  testCases: TestCase[];
}

export class UpdateProblemReq {
  @ApiProperty({ description: 'problem title', example: 'Two Sum' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ description: 'problem description', example: '1 + 1 = ?' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'test case', example: {} })
  @IsArray()
  @IsOptional()
  testCases?: TestCasesDto[];
}

export class TestCasesDto {
  @ApiProperty({ description: 'input', example: {} })
  @IsObject()
  input: object;

  @ApiProperty({ description: 'output', example: {} })
  @IsObject()
  output: object;
}

export class CreateProblemReq {
  @ApiProperty({ description: 'problem title', example: 'Two Sum' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'problem description', example: '1 + 1 = ?' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'test case', example: {} })
  @IsArray()
  @IsOptional()
  testCases: TestCasesDto[];
}
