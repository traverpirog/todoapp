import { hash, verify } from "argon2";
import asyncErrorHandler from "express-async-handler";

import { generateToken } from "../../utils/generateToken.js";
import { prisma } from "../prisma.js";

export const register = asyncErrorHandler(async (req, res) => {
	const { email, login, password, todos } = req.body;
	const isLogin = await prisma.user.findUnique({
		where: { login }
	});
	const isEmail = await prisma.user.findUnique({
		where: { email }
	});
	if (isLogin || isEmail)
		res.json({ message: "Email or login already exist" });

	const user = await prisma.user.create({
		data: {
			email,
			login,
			password: await hash(password),
			todos: {
				create: {
					title: todos.title || "",
					description: todos.description || ""
				}
			}
		}
	});
	const token = generateToken(user.id);
	res.json({ user, token });
});

export const login = asyncErrorHandler(async (req, res) => {
	const { login, password } = req.body;
	const user = await prisma.user.findUnique({
		where: { login },
		include: {
			todos: true
		}
	});
	if (!user) res.status(404).json({ message: "User not found" });
	const unhashedPassword = await verify(user.password, password);
	if (!unhashedPassword)
		res.status(401).json({ message: "Password incorrect" });
	const token = generateToken(user.id);
	res.json({ user, token });
});
