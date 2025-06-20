import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class Problem {
  @ApiProperty({ description: 'problem id', example: '1' })
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
}

export class CreateProblemReq {
  @ApiProperty({ description: 'problem title', example: 'Two Sum' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'problem description', example: '1 + 1 = ?' })
  @IsString()
  description: string;
}
