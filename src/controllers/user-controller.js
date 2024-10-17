const UserService = require("../services/user-service.js");

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            message: "Successfully created a new user",
            data: response,
            success: true,
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            error: error,
        });
    }
};

const signIn = async (req, res) => {
    try {
        const response = await userService.signin(req.body.email,req.body.password); 
        return res.status(201).json({
            message: "Successfully logged in",
            data: response,
            success: true,
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            error: error,
        });
    }
};

module.exports = {
    create,
    signIn
};
