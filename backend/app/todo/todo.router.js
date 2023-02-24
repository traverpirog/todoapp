import { Router } from "express";

import { checkAuthMiddleware } from "../../middleware/checkauth.middleware.js";

import { create, getAll, remove, update } from "./todo.controller.js";

const router = new Router();

router.route("/").post(create).get(checkAuthMiddleware, getAll);

router
	.route("/:id")
	.put(checkAuthMiddleware, update)
	.delete(checkAuthMiddleware, remove);

export default router;
