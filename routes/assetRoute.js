import express from "express";
import { employeeValidation } from "../middleware/validationMiddleware.js";
import { checkEmployeeExists } from "../middleware/checkMiddleware.js";
import { createAsset, resignEmployee } from "../controllers/assetController.js";

const router = express.Router();

router.post("/", employeeValidation, checkEmployeeExists, createAsset);
router.route("/:uniqueId").put(checkEmployeeExists, resignEmployee);



export default router;