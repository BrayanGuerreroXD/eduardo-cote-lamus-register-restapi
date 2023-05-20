import { Router } from "express";

import { getUser } from "../controllers/users.controller.js";
import { createRegister } from "../controllers/registers.controller.js";

const router = Router();

router.get("/users/:code", getUser);


router.post("/registers", createRegister);

export default router;