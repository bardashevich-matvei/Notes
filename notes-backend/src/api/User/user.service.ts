import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository
	) {}
	

	async create(user: User): Promise<User> {
		return this.userRepository.create(user);
	}

	async findOne(selector: User): Promise<User> {
		return this.userRepository.findOne(selector);
	}
}