import User from './user.interface';

export default interface ITeam extends Document {
  name: string;
  users: Array<User>;
  lastEdit?: Date;
  createDate: Date;
}
