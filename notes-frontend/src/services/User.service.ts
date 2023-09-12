import axios from "axios";

export default class UserService {
    static async createUser(user: any) {
        const response = await axios.post('http://localhost:3000/users/', user);
        return response.data;
    }
}