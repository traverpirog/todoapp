import dotenv from "dotenv";
import cors from 'cors'
import express from "express";

import { prisma } from "./app/prisma.js";
import todoRouter from "./app/todo/todo.router.js";
import userRouter from "./app/user/user.router.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
	if (process.env.NODE_ENV) app.use(morgan("dev"));
	app.use(cors());
	app.use(express.json());

	app.use("/api/users", userRouter);
	app.use("/api/todos", todoRouter);

	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
