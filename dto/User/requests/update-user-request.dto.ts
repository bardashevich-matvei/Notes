// @ts-ignore
import { IsString } from 'class-validator';

export default class UpdateUserRequestDto {
  @IsString()
  login?: string;

  @IsString()
  name?: string;
}