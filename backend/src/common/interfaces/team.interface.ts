import User from "./user.interface";

export default interface ITeam extends Document {
    name: String;
    users: Array<User>;
    lastEdit?: Date;
    createDate: Date;
}