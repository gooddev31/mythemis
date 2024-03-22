import mongoose from "mongoose";
import ObjectId from "mongoose";
import ITeam from "../intefaces/team.interface";

enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      role: {
        type: String,
        enum: [UserRole.USER, UserRole.ADMIN],
        default: UserRole.USER,
      },
    },
  ],
  folders: [
    {
      ref: "Folder",
      type: mongoose.Schema.Types.Mixed,
      required: false,
    },
  ],
  createDate: {
    type: Date,
    default: new Date(),
  },
});

const TeamModel = mongoose.model("Team", TeamSchema);

export { UserRole, TeamModel };
