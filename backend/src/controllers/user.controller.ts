import { Request, Response } from "express";
import User from "../models/user.model";

const getUser = async (req: Request, res: Response) => {
    const userId = req.user?._id;
    console.log(req.params.id)
    const user = await User.findById(userId ,"name email");
    if (!user) {
        res.status(400);
    }
    res.status(200).json(user);
};

export { getUser };