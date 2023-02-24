import asyncErrorHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const checkAuthMiddleware = asyncErrorHandler(async (req, res, next) => {
	const { authorization } = req.headers;
	if (authorization !== undefined) {
		try {
			const token = jwt.verify(
				authorization.split(" ")[1],
				process.env.SECRET_KEY
			);
			next();
		} catch (e) {
			res.status(401)
			throw new Error('Error: ' + e.message)
		}
	} else {
		res.status(401);
		throw new Error('Error: Not authorized')
	}
});
