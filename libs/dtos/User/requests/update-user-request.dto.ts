// @ts-ignore
import { IsString, IsOptional } from 'class-validator';

export default class UpdateUserRequestDto {
  @IsString()
  @IsOptional()
  login?: string;

  @IsString()
  @IsOptional()
  name?: string;
}