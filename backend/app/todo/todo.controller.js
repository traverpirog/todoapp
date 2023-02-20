import asyncErrorHandler from "express-async-handler";
import jwt from "jsonwebtoken";

import { prisma } from "../prisma.js";

export const create = asyncErrorHandler(async (req, res) => {
	const { title, description } = req.body;
	const { authorization } = req.headers;
	const userId = jwt.verify(
		authorization.split(" ")[1],
		process.env.SECRET_KEY
	);
	console.log(userId);
	const todo = await prisma.todo.create({
		data: {
			title,
			description,
			user: {
				connect: {
					id: +userId
				}
			}
		}
	});

	res.json({ todo });
});
