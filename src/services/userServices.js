import Service from "../typings/service";
import User from "../models/User";

class UserService extends Service {
    constructor() {
        super(User);
    }

    async findUserByEmail(email) {
        return await this.model.findOne({ email })
    }

}

export default UserService