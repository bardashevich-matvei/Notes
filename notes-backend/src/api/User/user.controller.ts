import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(
		private readonly userService: UserService
	) {}

	@Post()
	async create(
		@Body() user: User
	): Promise<User> {
		return await this.userService.create(user);
	}
}