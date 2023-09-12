import axios from "axios";
import CreateUserRequestDto from '@dto/User/create-user-request.dto';

export default class UserService {
    static async createUser(user: CreateUserRequestDto) {
        const response = await axios.post('http://localhost:3000/users/', user);
        return response.data;
    }
}