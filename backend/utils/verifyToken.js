import jwt from "jsonwebtoken";

export const verifyToken = token => jwt.verify(token, process.env.SECRET_KEY);
