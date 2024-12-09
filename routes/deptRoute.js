import express from "express";
import { deptValidation } from "../middleware/validationMiddleware.js";
import { checkDeptExists } from "../middleware/checkMiddleware.js";
import { createDept,deleteDept,findAsset, findEmployee,getDept } from "../controllers/deptController.js";

const router = express.Router();

router.post("/", deptValidation, checkDeptExists, createDept);
router.route("/:symbol").delete(checkDeptExists, deleteDept);
router.get("/asset/:symbol",  checkDeptExists, findAsset);
router.get("/employee/:symbol", checkDeptExists, findEmployee)
router.get("/",  getDept)






export default router;