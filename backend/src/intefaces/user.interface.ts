interface User extends Document{
    username: string,
    password: string,
    email: string,
    telephone: number,
    age?: number,
    company?: string,
    registerDate: Date,
    subscribe?: Date,
    comparePassword: (enteredPassword: string) => boolean;
}
export default User