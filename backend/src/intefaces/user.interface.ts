import IFolder from "./folder.interface";
import ITeam from "./team.interface";

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  telephone: number;
  age?: number;
  folders?: Array<IFolder>;
  teams?: Array<ITeam>;
  company?: string;
  registerDate: Date;
  subscribe?: Date;
  comparePassword: (enteredPassword: string) => boolean;
}
export default IUser;
