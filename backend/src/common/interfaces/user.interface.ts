import { ObjectId } from "mongoose";
import IFolder from "./folder.interface";
import ITeam from "./team.interface";

export default interface User extends Document {
    username: String;
    password: String;
    email: String;
    telephone: Number;
    age?: Number;
    folders?: Array<IFolder>;
    teams?: Array<ITeam>;
    company?: String;
    registerDate: Date;
    subscribe?: Date;
    comparePassword: (enteredPassword: string) => boolean;
}

export interface UserBasicInfo {
    _id: ObjectId;
    username: String;
    email: String;
}



