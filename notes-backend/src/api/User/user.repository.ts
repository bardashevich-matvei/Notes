import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {}

    async create(user: User): Promise<User> {
        return await(new User());
    }

    async findOne(selector: User): Promise<User> {
        return await(new User());
    }
}