// @ts-ignore
import { IsString } from 'class-validator';

export default class CreateUserRequestDto {
  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsString()
  name?: string;
}