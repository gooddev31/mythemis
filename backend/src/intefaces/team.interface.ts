import User from "./user.interface";
import ObjectId from "mongoose";


interface ITeam extends Document{
    name: string,
    users: Array<User>,
    lastEdit?: Date,
    createDate: Date,
}
export default ITeam