import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import CreateUserRequestDto from '@dto/User/create-user-request.dto'

@Controller('users')
export class UserController {
	constructor(
		private readonly userService: UserService
	) {}

	@Post()
	async create(
		@Body() user: CreateUserRequestDto
	): Promise<User> {
		return await this.userService.create(user);
	}
}