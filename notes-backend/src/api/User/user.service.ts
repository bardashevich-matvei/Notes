import { Injectable } from '@nestjs/common';
import UserResponseDto from '@libs/dtos/User/responses/user-response.dto';
import CreateUserRequestDto from '@libs/dtos/User/requests/create-user-request.dto';
import UpdateUserRequestDto from '@libs/dtos/User/requests/update-user-request.dto';
import { UserRepository } from './user.repository';
import { SearchRequest } from '@libs/search/SearchRequest';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) { }

	async create(movie: CreateUserRequestDto): Promise<UserResponseDto> {
		return this.userRepository.create(movie);
	}

	async findAll(limit?: number, offset?: number): Promise<UserResponseDto[]> {
		return this.userRepository.findAll(limit, offset);
	}

	async update(id: string, user: UpdateUserRequestDto): Promise<UserResponseDto> {
		return this.userRepository.update(id, user);
	}

	async findOne(id: string): Promise<UserResponseDto> {
		return this.userRepository.findOneById(id);
	}

	async delete(id: string): Promise<UserResponseDto> {
		return this.userRepository.delete(id);
	}

	async search(selector: SearchRequest): Promise<UserResponseDto[]> {
		return this.userRepository.search(selector);
	}
}
