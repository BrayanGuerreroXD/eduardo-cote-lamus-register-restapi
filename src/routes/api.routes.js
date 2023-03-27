import { Router } from "express";

import { getStudent } from "../controllers/students.controller";
import { createRegister } from "../controllers/registers.controller";

const router = Router();

router.get("/students/:code", getStudent);

router.post("/registers", createRegister);

export default router;