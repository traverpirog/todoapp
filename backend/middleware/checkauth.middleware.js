import asyncErrorHandler from "express-async-handler";

export const checkAuthMiddleware = asyncErrorHandler(async (req, res, next) => {
	const { authorization } = req;
});
