import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (res: Response, userId: string) => {
    const jwtSecret = process.env.JWT_TOKEN || "";
    const token = jwt.sign({ userId }, jwtSecret, {
        expiresIn: "1h",
    });

    console.log(token);

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
    });
};

const clearToken = (res: Response) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
};

export { generateToken, clearToken };