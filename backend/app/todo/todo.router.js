import { Router } from "express";

import { create } from "./todo.controller.js";

const router = new Router();

router.route("/").post(create);

export default router;
