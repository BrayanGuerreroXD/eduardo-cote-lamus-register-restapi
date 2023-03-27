import { Router } from "express";

import { getStudent } from "../controllers/students.controller.js";
import { createRegister } from "../controllers/registers.controller.js";

const router = Router();

router.get("/students/:code", getStudent);

router.post("/registers", createRegister);

export default router;