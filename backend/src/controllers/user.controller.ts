import { Request, Response } from "express";
import UserModel from "../models/user.model";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const getUserById = async (req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const userDataToUpdate = req.body;

    if (userDataToUpdate.password) {
      const salt = await bcrypt.genSalt(10);
      userDataToUpdate.password = await bcrypt.hash(
        userDataToUpdate.password,
        salt
      );
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: user?._id },
      userDataToUpdate,
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

export { getUserById, updateUser, deleteUser };
