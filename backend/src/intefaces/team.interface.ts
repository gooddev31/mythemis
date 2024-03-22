import { ObjectId } from "mongoose";

interface UserWithRole {
  userId: ObjectId;
  role: string;
}

interface ITeam extends Document {
  name: string;
  users: UserWithRole[];
  lastEdit?: Date;
  createDate: Date;
}
export default ITeam;
