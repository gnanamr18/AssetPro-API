import express from "express";
import { employeeValidation } from "../middleware/validationMiddleware.js";
import { checkEmployeeExists } from "../middleware/checkMiddleware.js";
import { createEmployee, resignEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", employeeValidation, checkEmployeeExists, createEmployee);
router.route("/:uniqueId").put(checkEmployeeExists, resignEmployee);



export default router;