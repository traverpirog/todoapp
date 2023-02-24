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

	res.json(todo);
});

export const getAll = asyncErrorHandler(async (req, res) => {
	const todos = await prisma.todo.findMany();

	res.json(todos);
});

export const update = asyncErrorHandler(async (req, res) => {
	const { id } = req.params;
	const { title, description, complete } = req.body;

	const todo = await prisma.todo.update({
		where: {
			id: +id
		},
		data: {
			title, description, complete
		}
	});

	res.json(todo);
});

export const remove = asyncErrorHandler(async (req, res) => {
	const { id } = req.params;

	const todo = await prisma.todo.delete({
		where: {
			id: +id
		}
	});

	res.json({message: "Successfully removed"});
});
