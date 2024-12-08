import express from "express";
import { deptValidation } from "../middleware/validationMiddleware.js";
import { checkDeptExists } from "../middleware/checkMiddleware.js";

const router = express.Router();

router.post("/dept", deptValidation, checkDeptExists, createDept);

export default router;