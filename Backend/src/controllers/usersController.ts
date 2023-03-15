import { Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import { User, validateUser } from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//@desc   creates new user
//@route  POST /api/users/register
//@access Public
const registerUser = AsyncHandler(async (req: Request, res: Response) => {
  //get request body
  const { name, username, password } = req.body;
  // validate body data
  await validateUser({ name, username, password });
  //check if user already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error("This username already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.username,
      token: generateToken(user._id, user.role),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc   Login user with username and password
//@route  POST /api/users/login
//@access Public
const loginUser = AsyncHandler(async (req: Request, res: Response) => {
  //get request body
  const { username, password } = req.body;

  //find user and compare password
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = generateToken(user._id, user.role);
    res.json({
      id: user._id,
      username: user.username,
      name: user.name,
      role: user.role,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

const generateToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

export { registerUser, loginUser };
