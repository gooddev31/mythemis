import { Request, Response } from "express";
import UserModel from "../models/user.model";
import { generateToken, clearToken } from "../utils/auth.utils";

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password, telephone } = req.body;
  const userExistEmail = await UserModel.findOne({ email });
  const userExistTelephone = await UserModel.findOne({ telephone });
  if (userExistEmail || userExistTelephone) {
    res.status(400).json({ message: "The user already exists" });
  } else {
    const user = await UserModel.create({
      username,
      email,
      password,
      telephone,
    });
    if (user) {
      generateToken(res, user._id.toString());
      res.status(200).json({
        id: user._id,
        name: user.username,
        email: user.email,
        telephone: user.telephone,
      });
    } else {
      res
        .status(400)
        .json({ message: "An error occurred in creating the user" });
    }
  }
};

const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user && (await user!.comparePassword(password))) {
    generateToken(res, user!._id.toString());
    res.status(201).json({
      id: user!._id,
      name: user!.username,
      email: user!.email,
    });
  } else {
    res.status(401).json({ message: "User not found / password incorrect" });
  }
};

const logoutUser = (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: "User logged out" });
};

export { registerUser, authenticateUser, logoutUser };
