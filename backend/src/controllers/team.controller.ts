import { Request, Response } from "express";
import UserModel from "../models/user.model";
import { UserRole, TeamModel } from "../models/team.model";
import * as mongoose from "mongoose";

export const validateId = async (
  req: Request,
  res: Response,
  next: Function,
  id: string
) => {
  const team = await TeamModel.findById(id);

  if (!team) {
    return res.status(404).json({ error: "Team not found" });
  }

  res.locals.team = team;
  next();
};

export const validateUser = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to validate team or user" });
  }
};

export const createTeam = async (req: Request, res: Response) => {
  try {
    const { name, users = [], createDate } = req.body;

    if (users.length) {
      const invalidRoles = users.some(
        (user: any) => !Object.values(UserRole).includes(user.role)
      );
      if (invalidRoles) {
        res.status(400).json({ error: "Invalid role for one or more users" });
        return;
      }

      const userIDs = users.map(
        (user: any) => new mongoose.Types.ObjectId(user.userId)
      );
      const existingUsers = await UserModel.find({ _id: { $in: userIDs } });
      if (existingUsers.length !== users.length) {
        res.status(400).json({ error: "One or more users do not exist" });
        return;
      }
    }
    users.push({ userId: req.user?._id, role: "admin" });

    const team = await TeamModel.create({
      name,
      users,
      createDate,
    });

    res.status(200).json(team);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Team cannot be added" });
  }
};

export const addMember = async (req: Request, res: Response) => {
  try {
    const { userId, role } = req.body;
    const team = res.locals.team;

    const existingMember = team.users.find(
      (member: any) => String(member.userId) === userId
    );
    if (existingMember) {
      return res.status(400).json({ error: "User already exists in the team" });
    }

    team.users.push({ userId, role });
    await team.save();

    res.status(200).json({ message: "User added to team successfully", team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add user to team" });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const team = res.locals.team;

    const memberIndex = team.users.findIndex(
      (member: any) => String(member.userId) === userId
    );
    if (memberIndex === -1) {
      return res
        .status(404)
        .json({ error: "User is not a member of this team" });
    }

    team.users.splice(memberIndex, 1);
    await team.save();

    res
      .status(200)
      .json({ message: "User removed from team successfully", team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to remove user from team" });
  }
};

export const updateMemberRole = async (req: Request, res: Response) => {
  try {
    const { userId, role } = req.body;
    const team = res.locals.team;

    const existingMember = team.users.find(
      (member: any) => String(member.userId) === userId
    );
    if (!existingMember) {
      return res.status(404).json({ error: "User not found in the team" });
    }

    existingMember.role = role;
    await team.save();

    res.status(200).json({ message: "Member role updated successfully", team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update member role" });
  }
};

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    const team = res.locals.team;

    if (!team.users || team.users.length === 0) {
      return res.status(404).json({ message: "No members found for this team" });
    }

    res.status(200).json({ members: team.users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve team members" });
  }
};
