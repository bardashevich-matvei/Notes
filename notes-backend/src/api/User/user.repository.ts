import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import CreateUserRequestDto from "@dto/User/create-user-request.dto";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {}

    async create(user: CreateUserRequestDto): Promise<User> {
        const savedUser = new this.userModel(user);
        return await savedUser.save();
    }

    async findOne(selector: any): Promise<User> {
        return await(new User());
    }
}