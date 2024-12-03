export {};
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../utils/hashPassword");

const createUser = async (req: any, res: any) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });

    if (user) {
      throw { status: 409, message: "Username has already exist" };
    }
    const { username, password } = req.body;

    const newUser = await User.create({
      username,
      password: await hashPassword(password),
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (error: any) {
    res
      .status(error.status || 500)
      .json({ error: error.message || "Something went wrong" });
  }
};

const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ users });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req: any, res: any) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      throw { status: 401, message: "Cannot find the user" };
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      throw { status: 401, message: "Password is incorrect" };
    }

    res
      .status(200)
      .json({ success: true, user: { id: user.id, username: user.username } });
  } catch (error: any) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message || "Something went wrong",
    });
  }
};

module.exports = { createUser, getAllUsers, login };
