const UserRepository = require("../repositories/user-repository.js");
const { JWT_KEY } = require("../config/serverConfig.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: "5d" });
            return result;
        } catch (error) {
            console.log("something went wrong while token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong while token verification", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(
                userInputPlainPassword,
                encryptedPassword
            );
        } catch (error) {
            console.log("something went wrong while password verification");
            throw error;
        }
    }
}

module.exports = UserService;
