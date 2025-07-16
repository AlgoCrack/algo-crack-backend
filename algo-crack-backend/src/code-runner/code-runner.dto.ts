import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsEnum, IsObject } from 'class-validator';

enum Language {
  JAVASCRIPT = 'javascript',
  JAVA = 'java',
  PYTHON = 'python',
  TYPESCRIPT = 'typescript',
}

export class ExecuteCodeReq {
  @ApiProperty({ description: 'problem id', example: 1 })
  @IsInt()
  problemId: number;

  @ApiProperty({ description: 'program code', example: ' console.log(123); ' })
  @IsEnum(Language)
  language: Language;

  @ApiProperty({ description: 'program code', example: 'typescript' })
  @IsString()
  code: string;
}

export class ExcuteCodeRes {
  @ApiProperty({ description: 'is it successful?', example: true })
  @IsString()
  success: boolean;

  @ApiProperty({
    description: 'function input',
    example: { nums: '[1, 2, 3]', str: 'aaa' },
  })
  input?: object;

  @ApiProperty({ description: 'function actualOutput', example: '[1]' })
  @IsObject()
  actualOutput?: object;

  @ApiProperty({ description: 'function expectedOutput', example: '[0,1]' })
  @IsObject()
  expectedOutput?: object;
}
