import { Router } from "express";

import { login, register } from "./user.controller.js";

const router = new Router();

router.route("/register").post(register);
router.route("/login").post(login);

export default router;
