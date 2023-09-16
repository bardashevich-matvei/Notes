import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import UserResponseDto from '@libs/dtos/User/responses/user-response.dto';
import CreateUserRequestDto from '@libs/dtos/User/requests/create-user-request.dto';
import UpdateUserRequestDto from '@libs/dtos/User/requests/update-user-request.dto';
import { SearchRequest } from '@libs/search/SearchRequest';
import { mapSearchRequestForMongo } from '@app/utils/mongo-search.utils';

@Injectable()
export class UserRepository {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<User>,
	) { }

	async create(user: CreateUserRequestDto): Promise<UserResponseDto> {
		const savedUser = new this.userModel(user);
		await savedUser.save();
		return new UserResponseDto(savedUser.toObject());
	}

	async findAll(limit?: number, offset?: number): Promise<UserResponseDto[]> {
		const selector: SearchRequest = { limit: limit, offset: offset };
		const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

		return (await this.userModel.find(filterQuery, null, queryOptions).lean().exec()).map(
			(item) => new UserResponseDto(item),
		);
	}

	async update(id: string, user: UpdateUserRequestDto): Promise<UserResponseDto> {
		const qe = await this.userModel.findById(id);
		console.log(qe);
		const updatedUser = await this.userModel
			.findByIdAndUpdate(id, user, { new: true })
			.lean()
			.exec();
		
		if (!updatedUser) {
			throw new BadRequestException(`User not found!`);
		}
		return new UserResponseDto(updatedUser);
	}

	async delete(id: string): Promise<UserResponseDto> {
		const deletedUser = await this.userModel.findByIdAndRemove(id).lean().exec();
		return new UserResponseDto(deletedUser || {});
	}

	async search(selector: SearchRequest): Promise<UserResponseDto[]> {
		const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

		return (await this.userModel.find(filterQuery, null, queryOptions).lean().exec()).map(
			(item) => new UserResponseDto(item),
		);
	}

	async findOneById(id: string): Promise<UserResponseDto> {
		const user = await this.userModel.findById(id).lean().exec();
		return new UserResponseDto(user || {});
	}
}
