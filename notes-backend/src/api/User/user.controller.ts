import { Controller, Patch, Get, Post, Body, ClassSerializerInterceptor, UseInterceptors, SerializeOptions, Param, Query, Delete } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import UserResponseDto from '@dto/User/responses/user-response.dto';
import CreateUserRequestDto from '@dto/User/requests/create-user-request.dto';
import UpdateUserRequestDto from '@dto/User/requests/update-user-request.dto';
import { SearchRequest } from '@dto/search/SearchRequest.dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({ excludeExtraneousValues: true })
export class UserController {
	constructor(
		private readonly userService: UserService
	) {}

	@Post()
	async create(
		@Body() user: CreateUserRequestDto
	): Promise<UserResponseDto> {
		return await this.userService.create(user);
	}

	@Patch(':id')
	async update(
		@Body() movie: UpdateUserRequestDto,
		@Param('id') id: string,
	): Promise<UserResponseDto> {
		return this.userService.update(id, movie);
	}

	@Get()
	async find(
		@Query('limit') limit?: number,
		@Query('offset') offset?: number,
	): Promise<UserResponseDto[]> {
		return this.userService.findAll(limit, offset);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<UserResponseDto> {
		return this.userService.delete(id);
	}
  
	@Post('/search')
	async search(@Body() selector: SearchRequest): Promise<UserResponseDto[]> {
		return this.userService.search(selector);
	}
}